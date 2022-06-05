import React, { useRef } from "react";
import { PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import SplitText from "gsap/dist/SplitText";

const LargeListEntry = ({ entry, index }) => {
  const entryRef = useRef(null);
  const tl = useRef(null);
  const split = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const q = gsap.utils.selector(entryRef.current);
    gsap.set(q(".lineTop"), {
      scaleX: 0,
      transformOrigin: "left center",
    });

    split.current = new SplitText(q("h3"), {
      type: "words, lines",
      linesClass: "splitLineOverflow",
    });

    gsap.set(split.current.words, {
      yPercent: -100,
    });

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: entryRef.current,
      },
    });

    tl.current

      .to(
        split.current.words,
        {
          yPercent: 0,
          stagger: 0.04,
          duration: 0.85,
          ease: "power4.inOut",
        },
        0
      )
      .to(
        q(".lineTop"),
        {
          scaleX: 1,
        },
        0.07
      );
  });

  return (
    <div className="largeListEntry" key={index} ref={entryRef}>
      <span className="lineTop"></span>
      <div>
        <div>
          <h3>{entry["entry-title"]}</h3>
          <span>{entry["entry-description"]}</span>
        </div>
        <div>
          <PrismicRichText field={entry["entry-bullet-list"]}></PrismicRichText>
        </div>
      </div>
    </div>
  );
};

export default LargeListEntry;
