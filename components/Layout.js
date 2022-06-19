import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.defaults({
  duration: 0.86,
  ease: "power3.inOut",
});

ScrollTrigger.defaults({
  start: "top bottom-=11%",
});

export const Layout = ({ children, menu, footer }) => {
  const router = useRouter();
  const coverRef = useRef(null);
  const mainRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const m = gsap.utils.selector(mainRef.current);
  const tl = useRef(null);

  return (
    <div>
      <Navbar menu={menu} />
      {/* <Notification /> */}

      <main ref={mainRef}>
        <div>{children}</div>
        <Footer footer={footer} />
      </main>
    </div>
  );
};
