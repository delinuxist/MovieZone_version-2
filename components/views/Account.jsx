/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { AiOutlineSync } from "react-icons/ai";
import SavedShows from "../SavedShows";

const Account = () => {
  const { user } = UserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);

  return (
    <>
      <div className=" w-full h-[400px]">
        <div className=" h-[400px] w-full">
          <img
            className=" w-full h-full object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/4d09b312-7160-4c32-9053-9baf9e33d996/GH-en-20220606-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="netflix"
          />
          <div className=" w-full h-[400px] bg-black/60 top-0 left-0 absolute" />
        </div>

        <div className=" absolute top-[20%] p-4 md:p-8 ">
          <h1 className=" text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
