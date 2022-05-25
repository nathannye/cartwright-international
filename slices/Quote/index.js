import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

const Quote = ({ slice }) => (
  <section className="quoteLarge">
    <h2>why us?</h2>
    <blockquote>
      to bring A competitive, on-the-money approach to upping your businesses
      sales game. with connections and expertise from manufacturing to market
      structures. we get down to business, and execute. period.
    </blockquote>
    <Link>
      <a className="internalLink">link here</a>
    </Link>
  </section>
);

export default Quote;
