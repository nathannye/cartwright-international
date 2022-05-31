import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { linkResolver } from "../prismicio";
import { createContext, useState } from "react";

// const TransitionContext = createContext({});

// const TransitionProvider = ({ children }) => {
//   const [timeline, setTimeline] = useState(() => {
//     gsap.timeline({ paused: true });
//   });

//   return (
//     <TransitionContext.Provider
//       value={{
//         timeline,
//         setTimeline,
//       }}
//     >
//       {children}
//     </TransitionContext.Provider>
//   );
// };

export const Layout = ({ children, menu, footer }) => {
  return (
    <div>
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

// export { TransitionContext, TransitionProvider };
