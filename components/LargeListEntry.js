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

    gsap.set(q("li"), {
      y: 7,
      autoAlpha: 0,
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
          stagger: 0.06,
          duration: 0.85,
          ease: "power3.inOut",
        },
        0.06
      )
      .to(
        q(".lineTop"),
        {
          scaleX: 1,
          duration: 0.55,
        },
        0.07
      )
      .to(
        q("li"),
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.054,
          ease: "power2.out",
        },
        0.34
      );
  });

  // const evens = entry["entry-bullet-list"].filter(
  //   (item) => entry["entry-bullet-list"].indexOf(item) % 2 === 0
  // );
  // const odds = entry["entry-bullet-list"].filter(
  //   (item) => entry["entry-bullet-list"].indexOf(item) % 2 === 1
  // );

  const perCol = Math.round(entry["entry-bullet-list"].length / 2);

  const firstCol = entry["entry-bullet-list"].filter(
    (item) => entry["entry-bullet-list"].indexOf(item) < perCol
  );

  const secondCol = entry["entry-bullet-list"].filter(
    (item) => entry["entry-bullet-list"].indexOf(item) > perCol - 1
  );

  return (
    <div className="largeListEntry" key={index} ref={entryRef}>
      <span className="lineTop"></span>
      <div>
        <div>
          <h3>{entry["entry-title"]}</h3>
          <span>{entry["entry-description"]}</span>
        </div>
        <div className="listColumns">
          <ul>
            {firstCol.map((li, index) => (
              <li key={index}>{li.text}</li>
            ))}
          </ul>
          <ul>
            {secondCol.map((li, index) => (
              <li key={index}>{li.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LargeListEntry;
