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

  const maskIconRefs = useRef([]);
  maskIconRefs.current = [];

  const addCardRefs = (el) => {
    if (el && maskIconRefs.current.includes(el)) {
      maskIconRefs.current.push(el);
    }
  };

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(SplitText);

    infoRefs.current.forEach((li, index) => {
      console.log(maskIconRefs.current);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: li,
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
          duration: 0.84,
          stagger: 0.16,
          ease: "power3.inOut",
        },
        0
      );
      return () => {
        tl.kill;
      };
    });
    return () => {
      ScrollTrigger.kill;
    };
  }, []);

  return (
    <section id="ourFramework">
      <h2>{slice.primary.title}</h2>
      {slice.items.map((item, index) => {
        return (
          <div className="frameworkEntry" key={index}>
            <div className="frameworkCard" ref={addCardRefs}>
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
        );
      })}
    </section>
  );
};

export default OurFramework;
