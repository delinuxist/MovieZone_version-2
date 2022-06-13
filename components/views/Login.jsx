/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { user, signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signIn(email, password);
      router.push("/");
      toast.success("Successfully Signed In");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };
  return (
    <>
      <div className=" w-full h-screen">
        <img
          className="hidden sm:block w-full h-full object-cover absolute "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/4d09b312-7160-4c32-9053-9baf9e33d996/GH-en-20220606-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="netflix"
        />
        <div className=" bg-black/60 left-0 fixed w-full h-screen top-0 "></div>
        <div className="z-50 fixed w-full px-4 py-24 ">
          <div className=" max-w-[450px] h-[600px] bg-black/75 mx-auto rounded-lg ">
            <div className="py-16 max-w-[320px] mx-auto">
              <h1 className=" text-3xl font-bold">Sign In</h1>
              <form
                onSubmit={handleSubmit}
                className=" w-full flex flex-col py-4"
              >
                <input
                  className=" outline-none p-3 my-2 bg-gray-700 rounded-lg"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className=" outline-none p-3 my-2 bg-gray-700 rounded-lg"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-gradient-to-r from-[#f9ba88] to-slate-400 my-6 px-6 py-3 rounded-lg">
                  {loading ? <SyncOutlined spin /> : "Sign In"}
                </button>
                <div className=" flex justify-between text-sm text-gray-600">
                  <p>
                    <input className=" mr-2" type="checkbox" /> Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className=" py-8">
                  <span className=" text-gray-600">New to MovieZone? </span>
                  <Link href="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
