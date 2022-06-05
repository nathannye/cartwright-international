import React, { useRef } from "react";
import { PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";

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

    split.current = "ya";

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: entryRef.current,
      },
    });

    tl.current.to(q(".lineTop"), {
      scaleX: 1,
    });
  });

  return (
    <div className="largeListEntry" key={index} ref={entryRef}>
      <span className="lineTop"></span>
      <div>
        <h3>{entry["entry-title"]}</h3>
        <div>
          <h4>{entry["entry-description"]}</h4>
          <PrismicRichText field={entry["entry-bullet-list"]}></PrismicRichText>
        </div>
      </div>
    </div>
  );
};

export default LargeListEntry;
