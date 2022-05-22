import React from "react";
import { PrismicRichText } from "@prismicio/react";

const HeaderStandard = ({ slice }) => (
  <header>
    <h4>{slice.primary.subhead}</h4>
    <h1>{slice.primary.headline}</h1>
  </header>
);

export default HeaderStandard;
