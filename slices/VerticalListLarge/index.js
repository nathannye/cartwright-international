import React from "react";
import { PrismicRichText } from "@prismicio/react";

const VerticalListLarge = ({ slice }) => {
  return (
    <section className="verticalListLarge">
      {slice.items.map((li) => {
        <div className="largeListEntry">
          <span className="lineTop"></span>
          <div>
            <h3>yoooooo</h3>
            <div>
              <h4>{li["entry-description"]}</h4>
            </div>
          </div>
        </div>;
      })}
    </section>
  );
};

export default VerticalListLarge;
