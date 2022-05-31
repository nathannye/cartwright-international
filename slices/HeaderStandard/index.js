import React from "react";
import { PrismicRichText } from "@prismicio/react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const HeaderStandard = ({ slice }) => {
  const colorTL = useRef(null);
  const headerRef = useRef(null);
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    colorTL.current = gsap.timeline({
      scrollTrigger: {
        start: "bottom bottom",
        trigger: headerRef.current,
        markers: true,
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
    <header className="headerStandard" ref={headerRef}>
      <h2>{slice.primary.subhead}</h2>
      <h1>{slice.primary.headline}</h1>
    </header>
  );
};

export default HeaderStandard;
