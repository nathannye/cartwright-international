import React from "react";
import { PrismicRichText } from "@prismicio/react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

const HeaderStandard = ({ slice }) => {
  const colorTL = useRef(null);
  const headerRef = useRef(null);
  // Swap color of header on scroll
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

  // Animate h1s
  useIsomorphicLayoutEffect(() => {
    let outline = document.querySelector(".outlineHeading");
    let solid = document.querySelector(".solidHeading");

    outline.split = new SplitText(outline, {
      type: "lines",
    });

    solid.split = new SplitText(solid, {
      type: "lines",
      linesClass: "splitLine",
    });

    gsap.set(outline.split.lines, {
      autoAlpha: 0,
      x: -45,
    });

    gsap.set(solid.split.lines, {
      x: -45,
      display: "inline-block",
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });

    gsap.set("h2", {
      autoAlpha: 0,
    });

    let tl = gsap.timeline({});

    tl.to(
      "h2",
      {
        autoAlpha: 1,
        duration: 0.4,
      },
      0
    )
      .to(
        outline.split.lines,
        {
          autoAlpha: 1,
          x: 0,
          duration: 1.1,
          stagger: 0.1,
          ease: "power3.out",
        },
        0.4
      )
      .to(
        solid.split.lines,
        {
          stagger: 0.1,
          duration: 0.82,
          ease: "power3.inOut",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        0.4
      )
      .to(
        solid.split.lines,
        {
          x: 0,
          duration: 1.1,
          stagger: 0.1,
          ease: "power3.out",
        },
        0.4
      );
  });

  return (
    <header className="headerStandard" ref={headerRef}>
      <h2>{slice.primary.subhead}</h2>
      <div className="headingOverlapContainer">
        <h1 className="outlineHeading">{slice.primary.headline}</h1>
        <h1 className="solidHeading">{slice.primary.headline}</h1>
      </div>
    </header>
  );
};

export default HeaderStandard;
