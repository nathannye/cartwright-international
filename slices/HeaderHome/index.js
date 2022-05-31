import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function HeaderHome({ slice }) {
  const imageRef = useRef();
  const tl = useRef(null);
  const headerRef = useRef();
  const colorTL = useRef(null);

  gsap.defaults({
    duration: 0.96,
    ease: "power4.inOut",
  });

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap
      .timeline({
        paused: true,
      })
      .fromTo(
        imageRef.current,
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
      );
  }, []);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    colorTL.current = gsap.timeline({
      scrollTrigger: {
        start: "bottom bottom",
        trigger: headerRef.current,
        onEnter: () => {
          document.body.classList.add("isLight");
        },
        onEnterBack: () => {
          document.body.classList.add("isLight");
        },
        onLeaveBack: () => {
          document.body.classList.remove("isLight");
        },
      },
    });
  });

  return (
    <header id="headerLarge" ref={headerRef}>
      <div id="companyNameContainer">
        <span>
          <h1>cartwright</h1>
          <blockquote>{slice.primary["small-paragraph"]}</blockquote>
        </span>
        <h1>international</h1>
      </div>
      <div className="imageContainer" ref={imageRef}>
        {" "}
        <img
          src={slice.primary["header-image"].url}
          alt={slice.primary["header-image"].alt}
        />
      </div>
    </header>
  );
}
