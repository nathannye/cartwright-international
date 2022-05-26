import React from "react";
// import { PrismicText } from "@prismicio/react";s

const VerticalListSmall = ({ slice }) => (
  <section className="verticalListSmall">
    <span className="verticalListHeading">
      <h2>{slice.primary.title}</h2>
    </span>
    <div className="verticalListEntries">
      {slice.items.map((item) => {
        <div className="listEntry">
          <span className="entryLineTop"></span>
          <h3>{slice.items.heading}</h3>
          <p>{slice.items.description}</p>
        </div>;
      })}
    </div>
  </section>
);

export default VerticalListSmall;
