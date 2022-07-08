import React, { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import DrawSVGPlugin from "gsap/dist/DrawSVGPlugin";

const HeaderEvent = ({ slice }) => {
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const outlineSplit = useRef(null);
  const tl = useRef(null);
  const solidSplit = useRef(null);
  const introTL = useRef(null);

  useIsomorphicLayoutEffect(() => {
    document.body.classList.add("isLight");
    const q = gsap.utils.selector(headerRef.current);
    const i = gsap.utils.selector(introRef.current);

    gsap.registerPlugin(SplitText, DrawSVGPlugin);

    document.fonts.ready.then(() => {
      outlineSplit.current = new SplitText(q(".outlineHeading"), {
        type: "lines",
      });

      solidSplit.current = new SplitText(q(".solidHeading"), {
        type: "lines",
      });

      gsap.set(q("li"), {
        autoAlpha: 0,
        y: 7,
      });

      gsap.set(q(".arrowCircle"), {
        drawSVG: "0%",
      });

      gsap.set(solidSplit.current.lines, {
        autoAlpha: 0,
        x: -45,
        display: "inline-block",
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      });
      // Set header anims
      gsap.set(outlineSplit.current.lines, {
        x: -45,
        autoAlpha: 0,
      });
      gsap.set(q("h2"), {
        autoAlpha: 0,
      });
      gsap.set(q(".arrowHead"), {
        autoAlpha: 0,
        y: -24,
      });
      gsap.set(q(".arrowStem"), {
        autoAlpha: 0,
        y: -24,
      });

      gsap.set(q("img"), {
        autoAlpha: 0,
      });

      gsap.set(q("a"), {
        autoAlpha: 0,
      });

      // Set intro anims
      gsap.set(i("img"), {
        yPercent: 110,
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
          i("img"),
          {
            yPercent: 0,
          },
          0
        )
        .to(
          introRef.current,
          {
            autoAlpha: 0,
            duration: 0.4,
          },
          1.65
        )
        .to(
          q("img"),
          {
            autoAlpha: 1,
          },
          1.9
        )
        // .to(
        //   introRef.current,
        //   {
        //     display: "none",
        //   },
        //   2
        // )
        .to(
          q("h2"),
          {
            autoAlpha: 1,
            duration: 0.7,
          },
          2.8
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
          2.8
        )
        .to(
          solidSplit.current.lines,
          {
            stagger: 0.1,
            duration: 0.74,
            ease: "power3.inOut",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
          2.8
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
          2.8
        )
        .to(
          q("a"),
          {
            autoAlpha: 1,
          },
          2.8
        )
        .to(
          q(".arrowCircle"),
          {
            drawSVG: "100%",
            duration: 0.75,
          },
          2.8
        )
        .to(
          q(".arrowHead"),
          {
            y: 0,
            duration: 0.59,
            autoAlpha: 1,
          },
          "<+=.05"
        )
        .to(
          q(".arrowStem"),
          {
            y: 0,
            duration: 0.59,
            autoAlpha: 1,
          },
          "<"
        )
        .to(
          q("li"),
          {
            stagger: 0.1,
            y: 0,
            autoAlpha: 1,
            ease: "power3.out",
          },
          ">"
        );
    });

    return () => {
      if (tl.current) {
        tl.current.kill;
      }
    };
  });

  return (
    <>
      <div id="eventIntroContainer" ref={introRef}>
        <div id="hubLogoContainer">
          <img src="./EmpowermentHubWordmark.svg"></img>
        </div>
      </div>
      <header ref={headerRef} id="eventHeader">
        <div className="headingOverlapContainer">
          <h1 className="outlineHeading">{slice.primary["upper-title"]}</h1>
          <h1 className="solidHeading">{slice.primary["upper-title"]}</h1>
        </div>
        <a className="scrollDownHeaderEvent" href="#sliderLink">
          {slice.primary["ticket-title"]}
        </a>
        <ul className="eventHeaderBullets">
          {slice.items.map((item, index) => (
            <li key={index}>{item.bullet}</li>
          ))}
        </ul>
        <img
          src={slice.primary["background-image"].url}
          alt={slice.primary["background-image"].alt}
        />
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scrollIndicator"
        >
          <circle
            className="arrowCircle"
            cx="45.3371"
            cy="44.8619"
            r="43.1064"
            stroke="var(--tan)"
            strokeWidth="2.5"
            transform="rotate(-90 45 45)"
          />
          <path
            className="arrowStem"
            d="M45.311 30.4843L45.311 59.6402"
            stroke="var(--tan)"
            strokeWidth="2.5"
          />
          <path
            className="arrowHead"
            d="M34.134 50.0709C40.7697 50.0709 45.4264 59.4617 45.4264 59.4617C45.4264 59.4617 49.3695 50.0709 56.7186 50.0709"
            stroke="var(--tan)"
            strokeWidth="2.5"
          />
        </svg>
      </header>
    </>
  );
};

export default HeaderEvent;
