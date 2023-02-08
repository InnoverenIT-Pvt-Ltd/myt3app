import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Mainheader from "../pages/mainheader"
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "../utils/api";
import { Main } from "next/document";
import Layout from "./Layout";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
   <Mainheader/>
   <Layout/>

   
     
    </>
  );
};

export default Home;


