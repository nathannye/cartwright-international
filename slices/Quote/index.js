import React from "react";
import Link from "next/link";
import { PrismicLink } from "@prismicio/react";

const Quote = ({ slice }) => {
  return (
    <section className="quoteLarge">
      <h2>{slice.primary.heading}</h2>
      <blockquote>{slice.primary.quote}</blockquote>
      <PrismicLink field={slice.primary.link} className="internalLink">
        {slice.primary["link-label"]}
      </PrismicLink>
    </section>
  );
};

export default Quote;
