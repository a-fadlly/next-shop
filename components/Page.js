import Head from "next/head";
import Title from "@/components/Title";
import { Children } from "react";
import NavBar from "./NavBar";

function Page(props) {
  return (
    <>
      <Head>
        <title>{props.title} - Next Shop</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="px-6 py-4">
        <Title>{props.title}</Title>
        {props.children}
      </main>
    </>
  );
}

export default Page;
