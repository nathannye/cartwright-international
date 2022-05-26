import React from "react";
import { PrismicRichText } from "@prismicio/react";

const HeaderStandard = ({ slice }) => (
  <header className="headerStandard">
    <h2>{slice.primary.subhead}</h2>
    <h1>{slice.primary.headline}</h1>
  </header>
);

export default HeaderStandard;
