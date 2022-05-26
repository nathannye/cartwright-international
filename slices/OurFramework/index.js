import React from "react";

const OurFramework = ({ slice }) => (
  <section id="ourFramework">
    <h2>{slice.primary.title}</h2>
    <div className="frameworkEntry">
      <div className="frameworkCard">
        <div className="cardInfo">
          <h3>01</h3>
          <h3>{slice.items[0]["step-title"]}</h3>
        </div>
      </div>
      <div className="frameworkText">
        <h3>{slice.items[0]["step-heading"]}</h3>
        <p>{slice.items[0]["step-description"]}</p>
      </div>
    </div>
    <div className="frameworkEntry">
      <div className="frameworkCard">
        <div className="cardInfo">
          <h3>02</h3>
          <h3>{slice.items[1]["step-title"]}</h3>
        </div>
      </div>
      <div className="frameworkText">
        <h3>{slice.items[1]["step-heading"]}</h3>
        <p>{slice.items[1]["step-description"]}</p>
      </div>
    </div>
    <div className="frameworkEntry">
      <div className="frameworkCard">
        <div className="cardInfo">
          <h3>03</h3>
          <h3>{slice.items[2]["step-title"]}</h3>
        </div>
      </div>
      <div className="frameworkText">
        <h3>{slice.items[2]["step-heading"]}</h3>
        <p>{slice.items[2]["step-description"]}</p>
      </div>
    </div>
  </section>
);

export default OurFramework;
