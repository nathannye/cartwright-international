import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Notification from "./Notification"


gsap.defaults({
  duration: 0.96,
  ease: "power4.inOut",
});

ScrollTrigger.defaults({
  start: "top bottom-=4%",
});

export const Layout = ({ children, menu }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const coverRef = useRef(null);
  const mainRef = useRef(null);
  const contentRef = useRef(null);
  const q = gsap.utils.selector(coverRef);

  useIsomorphicLayoutEffect(() => {
    gsap.set(q("div.transitionCover"), {
      scaleY: 0,
      transformOrigin: "center bottom",
    });

    const transitionStart = () => {
      console.log("start transition");
      setIsActive(true);
      const tl = gsap.timeline({});
      tl.set(
        q("div.transitionCover"),
        {
          display: "block",
        },
        0
      )
        .to(
          mainRef.current,
          {
            y: -40,
            duration: 0.3,
            ease: "power3.in",
            autoAlpha: 0,
          },
          0
        )
        .to(
          q("div.transitionCover"),
          {
            scaleY: 1,
            ease: "power4.inOut",
            duration: 0.74,
            stagger: -0.13,
            delay: 0.01,
          },
          0
        )
        .call(
          function () {
            ScrollTrigger.refresh;
            if (document.body.classList.contains("isLight")) {
              document.body.classList.remove("isLight");
            }
          },
          null,
          0.95
        );
    };
    const transitionEnd = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          ScrollTrigger.refresh();
        },
      });
      if (isActive) {
        setTimeout(() => {
          tl.to(
            mainRef.current,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.001,
            },
            0
          )
            .set(
              q("div.transitionCover"),
              {
                display: "none",
              },
              0
            )
            .call(
              function () {
                if (document.body.classList.contains("isLight")) {
                  document.body.classList.remove("isLight");
                }
              },
              null,
              0
            )
            .set(
              q("div.transitionCover"),
              {
                scaleY: 0,
              },
              0
            );
        }, 1000);
        setIsActive(false);
      }
    };

    router.events.on("routeChangeStart", transitionStart);
    router.events.on("routeChangeComplete", transitionEnd);
    router.events.on("routeChangeError", transitionEnd);

    return () => {
      router.events.off("routeChangeStart", transitionStart);
      router.events.off("routeChangeComplete", transitionEnd);
      router.events.off("routeChangeError", transitionEnd);
    };
  }, [isActive, router]);

  return (
    <div>
      <Navbar menu={menu} />
      <div id="transitionContainer" ref={coverRef}>
        <div className="transitionCover"></div>
        <div className="transitionCover"></div>
      </div>

      <main ref={mainRef}>
        <div>{children}</div>
      </main>
      <Notification />
      <Footer />
    </div>
  );
};
