import { async } from "@firebase/util";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import { UserAuth } from "../../context/AuthContext";
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await logOut();
      router.push("/signin");
      toast.success("Successfully Logged Out");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      <Link href="/">
        <h1 className=" text-4xl font-bold bg-clip-text w-fit text-transparent cursor-pointer bg-gradient-to-r from-[#f4b886] to-cyan-100">
          MovieZone
        </h1>
      </Link>
      <div>
        {user ? (
          <div className=" flex">
            <div className=" group">
              <button className="mr-3 pr-4 px-6 py-2 hover:border-orange-400 hover:border rounded-lg">
                Account
              </button>
              <div className="hidden group-hover:block absolute top-[3.67rem] group-hover:right-[1.29rem] bg-gradient-to-r from-orange-300 to-slate-700 w-[200px] h-[50px] ease-in-out rounded-lg group-hover:duration-300 p-1">
                <div>
                  <div className=" text-white w-full h-full flex items-center justify-around  border-b    ">
                    <MdOutlineAccountCircle size={20} />
                    <p className="font-light text-sm">{user.email}</p>
                  </div>
                  <Link href="/account">
                    <h1 className=" cursor-pointer text-center">My Shows</h1>
                  </Link>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogOut}
              className=" bg-gradient-to-r from-[#f9ba88] to-slate-400 px-6 py-2 rounded-lg "
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link href="/signin">
              <button className="mr-3 pr-4 px-6 py-2 hover:border-orange-400 hover:border rounded-lg">
                Sign In
              </button>
            </Link>
            <Link href="/signup">
              <button className=" bg-gradient-to-r from-[#f9ba88] to-slate-400 px-6 py-2 rounded-lg ">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
