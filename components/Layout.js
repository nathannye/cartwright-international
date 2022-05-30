import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { linkResolver } from "../prismicio";

export const Layout = ({ children, menu, footer }) => {
  return (
    <div>
      {/* <Head>
        <title>thing thingy</title>
      </Head> */}
      <Navbar menu={menu} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// export const linkResolver = (doc) => {
//   if (doc.type === "contact-us") {
//     footer = "hasNone";
//   }
// };
