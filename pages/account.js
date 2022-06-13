import Head from "next/head";
import React from "react";
import Account from "../components/views/Account";

const account = () => {
  return (
    <>
      <Head>
        <title>Accout</title>
      </Head>
      <Account />
    </>
  );
};

export default account;
