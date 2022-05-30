import Head from "next/head";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children, menu }) => {
  return (
    <div>
      <Head>
        <title>thing thingy</title>
      </Head>
      <Navbar menu={menu} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
