import React from "react";
import { PrismicRichText } from "@prismicio/react";

const OurFramework = ({ slice }) => (
  <section id="ourFramework">
    <h2>our framework</h2>
    <div className="frameworkEntry">
      <div className="frameworkCard">
        <div className="cardInfo">
          <h3>01</h3>
          <h3>Identify</h3>
        </div>
      </div>
      <div className="frameworkText">
        <h3>stuff</h3>
        <p>
          We aim to diagnose each businesses unique issues, not prescribe a
          fix-all approach. Our effectiveness stems from the ability to listen
          to every detail and understand your process.
        </p>
      </div>
    </div>
  </section>
);

export default OurFramework;
