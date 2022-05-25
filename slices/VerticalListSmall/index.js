import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

const VerticalListSmall = ({ slice }) => (
  <section className="verticalListSmall">
    <span className="verticalListHeading">
      <h2>what we do</h2>
      <Link href="/">
        <a>link here</a>
      </Link>
    </span>
    <div className="verticalListEntries">
      <div className="listEntry">
        <h2>thing</h2>
        <p>
          description, Helping you gain traction in your market and defining a
          clear plan to help you accelerate towards company-wide objectives.
        </p>
      </div>
    </div>
  </section>
);

export default VerticalListSmall;
