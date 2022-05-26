import React from "react";

const Quote = ({ slice }) => (
  <section className="quoteLarge">
    <h2>{slice.primary.heading}</h2>
    <blockquote>{slice.primary.quote}</blockquote>
    {/* <Link href="/">
      <a className="internalLink">link here</a>
    </Link> */}
  </section>
);

export default Quote;
