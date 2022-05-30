import React from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
// import { PrismicText } from "@prismicio/react";s

const VerticalListSmall = ({ slice }) => {
  return (
    <section className="verticalListSmall">
      <span className="verticalListHeading">
        <h2>{slice.primary.title}</h2>
      </span>
      <div className="verticalListEntries">
        <p>{slice.primary.description}</p>
        <div>
          {slice.items.map((item) => (
            <div className="listEntry" key={item.heading}>
              <span className="lineTop"></span>
              <h3>{item.heading}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalListSmall;
