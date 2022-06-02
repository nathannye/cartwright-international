import React from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import gsap from "gsap";
import { PrismicText } from "@prismicio/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

const OurFramework = ({ slice }) => {
  const infoRefs = useRef([]);
  infoRefs.current = [];

  const addInfoRefs = (el) => {
    if (el && !infoRefs.current.includes(el)) {
      infoRefs.current.push(el);
    }
  };

  const textRefs = [];
  textRefs.current = [];

  const addTextRef = (el) => {
    if (el && textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(SplitText);

    infoRefs.current.forEach((li, index) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          start: "top center",
          trigger: li,
          markers: true,
          onEnter: () => {
            console.log("entered");
          },
        },
      });

      li.split = new SplitText([li.children[0], li.children[1]], {
        type: "words, lines",
        linesClass: "splitLineOverflow",
      });

      gsap.set(li.split.words, {
        yPercent: 100,
      });

      tl.to(
        li.split.words,
        {
          yPercent: 0,
          duration: 0.74,
          stagger: 0.1,
        },
        0
      );
    });
  });

  return (
    <section id="ourFramework">
      <h2>{slice.primary.title}</h2>
      {slice.items.map((item, index) => (
        <div className="frameworkEntry" key={index}>
          <div className="frameworkCard">
            <div className="cardInfo" ref={addInfoRefs}>
              <h3 className="entryNumber">{`0${index + 1}`}</h3>
              <h3 className="entryName">{item.title}</h3>
            </div>
            <div className="iconContainer">
              <img src="/identifyWhite.svg" />
            </div>
            <div className="iconContainer">
              <img src="./identifyMaroon.svg" />
            </div>
          </div>
          <div className="frameworkText" ref={addTextRef}>
            <h3>{item.heading}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      {/* <h2>{slice.primary.title}</h2>
      <div className="frameworkEntry" ref={addCardRef}>
        <div className="frameworkCard">
          <div className="cardInfo">
            <h3 className="entryNumber">01</h3>
            <h3 className="entryName">{slice.items[0]["step-title"]}</h3>
          </div>
          <div className="iconContainer">
            <img src="/identifyWhite.svg" />
          </div>
          <div className="iconContainer">
            <img src="./identifyMaroon.svg" />
          </div>
        </div>
        <div className="frameworkText">
          <h3>{slice.items[0]["step-heading"]}</h3>
          <p>{slice.items[0]["step-description"]}</p>
        </div>
      </div>
      <div className="frameworkEntry">
        <div className="frameworkCard">
          <div className="cardInfo">
            <h3>02</h3>
            <h3>{slice.items[1]["step-title"]}</h3>
          </div>
        </div>
        <div className="frameworkText">
          <h3>{slice.items[1]["step-heading"]}</h3>
          <p>{slice.items[1]["step-description"]}</p>
        </div>
      </div>
      <div className="frameworkEntry">
        <div className="frameworkCard">
          <div className="cardInfo">
            <h3>03</h3>
            <h3>{slice.items[2]["step-title"]}</h3>
          </div>
        </div>
        <div className="frameworkText">
          <h3>{slice.items[2]["step-heading"]}</h3>
          <p>{slice.items[2]["step-description"]}</p>
        </div>
      </div> */}
    </section>
  );
};

export default OurFramework;
