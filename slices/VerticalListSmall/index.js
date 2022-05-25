import React from "react";
import { PrismicText } from "@prismicio/react";
import Link from "next/link";

const VerticalListSmall = ({ slice }) => (
  <section className="verticalListSmall">
    <span className="verticalListHeading">
      <h2>
        <PrismicText field={slice.primary["section-title"]} />
      </h2>
      {/* <Link href="/" className="internalLink">
        <a>link here</a>
      </Link> */}
    </span>
    <div className="verticalListEntries">
      {slice?.items?.map((item, i) => (
        <div className="listEntry">
          <span className="entryLineTop"></span>
          <h3>
            <PrismicText field={i["entry-title"]} />
          </h3>
          <p>
            <PrismicText field={i["entry-description"]} />
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default VerticalListSmall;
