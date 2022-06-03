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
  const solidRef = useRef(null);
  const outlineRef = useRef(null);
  const el = useRef(null);
  const tl = useRef(null);
  const headingRefs = useRef(null);
  const h = gsap.utils.selector(headingRefs);
  const q = gsap.utils.selector(el);

  // Swap color of header on scroll
  useIsomorphicLayoutEffect(() => {
    document.body.classList.remove("isLight");

    gsap.registerPlugin(ScrollTrigger);
    colorTL.current = gsap.timeline({
      scrollTrigger: {
        start: "bottom bottom",
        trigger: el.current,
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

    return () => {
      ScrollTrigger.kill;
    };
  }, []);

  // Animate h1s
  useIsomorphicLayoutEffect(() => {
    let outlineSplit = new SplitText(h(".outlineHeading"), {
      type: "lines",
    });

    let solidSplit = new SplitText(h(".solidHeading"), {
      type: "lines",
      linesClass: "splitLine",
    });

    gsap.set(solidSplit.lines, {
      autoAlpha: 0,
      x: -45,
      display: "inline-block",
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });

    gsap.set(outlineSplit.lines, {
      x: -45,
      autoAlpha: 0,
    });

    gsap.set(q("h2"), {
      autoAlpha: 0,
    });

    let tl = gsap.timeline({
      delay: 0.675,
    });

    tl.to(
      q("h2"),
      {
        autoAlpha: 1,
        duration: 0.7,
      },
      0
    )
      .to(
        outlineSplit.lines,
        {
          autoAlpha: 1,
          x: 0,
          duration: 1.1,
          stagger: 0.1,
          ease: "power3.out",
        },
        0.3
      )
      .to(
        solidSplit.lines,
        {
          stagger: 0.1,
          duration: 0.82,
          ease: "power3.inOut",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        0.3
      )
      .to(
        solidSplit.lines,
        {
          x: 0,
          duration: 1.1,
          stagger: 0.1,
          autoAlpha: 1,
          ease: "power3.out",
        },
        0.3
      );

    return () => {};
  });

  return (
    <header className="headerStandard" ref={el}>
      <h2>{slice.primary.subhead}</h2>
      <div className="headingOverlapContainer" ref={headingRefs}>
        <h1 className="outlineHeading">{slice.primary.headline}</h1>
        <h1 className="solidHeading">{slice.primary.headline}</h1>
      </div>
    </header>
  );
};

export default HeaderStandard;
