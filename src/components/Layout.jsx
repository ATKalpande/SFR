import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className="overflow-hidden">{children}</div>
      <Footer />
    </>
  );
};
