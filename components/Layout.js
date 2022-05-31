import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import gsap from "gsap";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

export const Layout = ({ children, menu, footer }) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    gsap.set("div.transitionCover", {
      scaleY: 0,
      transformOrigin: "center bottom",
    });

    const transitionStart = () => {
      setIsActive(true);
      const tl = gsap.timeline();
      tl.set(
        "div.transitionCover",
        {
          display: "block",
        },
        0
      )
        .to(
          "main",
          {
            y: -40,
            duration: 0.3,
            ease: "power3.in",
            autoAlpha: 0,
          },
          0
        )
        .to(
          "div.transitionCover",
          {
            scaleY: 1,
            ease: "power4.inOut",
            duration: 1.1,
            stagger: -0.15,
            delay: 0.01,
          },
          0
        )
        .call(
          function () {
            if (document.body.classList.contains("isLight")) {
              setTimeout(() => {
                document.body.classList.remove("isLight");
              }, 100);
            }
          },
          null,
          1
        );
    };
    const transitionEnd = () => {
      const tl = gsap.timeline();
      if (isActive) {
        setTimeout(() => {
          tl.to(
            "main",
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.001,
            },
            0
          )
            .set(
              "div.transitionCover",
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
              "div.transitionCover",
              {
                scaleY: 0,
              },
              0
            );
        }, 700);
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
      <div id="transitionContainer">
        <div className="transitionCover"></div>
        <div className="transitionCover"></div>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};
