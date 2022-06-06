import React from "react";
import { PrismicRichText } from "@prismicio/react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

const HeaderStandard = ({ slice }) => {
  const colorTL = useRef(null);
  const el = useRef(null);
  const tl = useRef(null);
  const outlineSplit = useRef(null);
  const solidSplit = useRef(null);

  // Swap color of header on scroll
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

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
  }, []);

  // Animate h1s
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const q = gsap.utils.selector(el);
    outlineSplit.current = new SplitText(q(".outlineHeading"), {
      type: "lines",
    });

    solidSplit.current = new SplitText(q(".solidHeading"), {
      type: "lines",
    });

    gsap.set(solidSplit.current.lines, {
      autoAlpha: 0,
      x: -45,
      display: "inline-block",
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });

    gsap.set(outlineSplit.current.lines, {
      x: -45,
      autoAlpha: 0,
    });

    gsap.set(q("h2"), {
      autoAlpha: 0,
    });

    tl.current = gsap.timeline({
      delay: 0.96,
      onComplete: () => {
        outlineSplit.current.revert();
        solidSplit.current.revert();
      },
    });

    tl.current
      .to(
        q("h2"),
        {
          autoAlpha: 1,
          duration: 0.7,
        },
        0
      )
      .to(
        outlineSplit.current.lines,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.76,
          stagger: 0.09,
          ease: "power3.out",
        },
        0.3
      )
      .to(
        solidSplit.current.lines,
        {
          stagger: 0.1,
          duration: 0.74,
          ease: "power3.inOut",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        0.3
      )
      .to(
        solidSplit.current.lines,
        {
          x: 0,
          duration: 0.76,
          stagger: 0.09,
          autoAlpha: 1,
          ease: "power3.out",
        },
        0.3
      );
    return () => {
      tl.current.kill();
    };
  });

  return (
    <header className="headerStandard" ref={el}>
      <h2>{slice.primary.subhead}</h2>
      <div className="headingOverlapContainer">
        <h1 className="outlineHeading">{slice.primary.headline}</h1>
        <h1 className="solidHeading">{slice.primary.headline}</h1>
      </div>
    </header>
  );
};

export default HeaderStandard;
