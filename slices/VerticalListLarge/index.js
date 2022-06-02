import React from "react";
import { PrismicRichText } from "@prismicio/react";

const VerticalListLarge = ({ slice }) => {
  console.log(slice.items[0]["entry-description"]);

  return (
    <section className="verticalListLarge">
      {slice.items.map((item, index) => (
        <div className="largeListEntry" key={index + item}>
          <span className="lineTop"></span>
          <div>
            <h3>{item["entry-title"]}</h3>
            <div>
              <h4>{item["entry-description"]}</h4>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default VerticalListLarge;
