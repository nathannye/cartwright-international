import React, { useState, useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Dropdown from "./Dropdown";

const VerticalListDropdown = ({ slice }) => {
  return (
    <section className="verticalListSmall hasDropdown">
      <span className="verticalListHeading">
        <h2>{slice.primary.title}</h2>
      </span>
      <div className="verticalListEntries">
        <div>
          {slice.items.map((item, index) => {
            return <Dropdown key={index} item={item} />;
          })}
        </div>
      </div>
      <h3>
        More questions?{" "}
        <a href="mailto:info@cartwrightintl.net">info@cartwrightintl.net</a>
      </h3>
    </section>
  );
};

export default VerticalListDropdown;
