import React from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import gsap from "gsap";
import { PrismicText } from "@prismicio/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

const OurFramework = ({ slice }) => {
  let tl = useRef();
  const addRef = (el) => { };
  
  useIsomorphicLayoutEffect(() => {
    
  })

  return (
    <section id="ourFramework">
      <h2>{slice.primary.title}</h2>
      {slice.items.map((item, index) => (
        <div className="frameworkEntry" key={index} ref={addRef}>
          <div className="frameworkCard">
            <div className="cardInfo">
              <h3 className="entryNumber">0{index + 1}</h3>
              <h3 className="entryName">{item.title}</h3>
            </div>
            <div className="iconContainer"></div>
          </div>
          <div className="frameworkText">
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
