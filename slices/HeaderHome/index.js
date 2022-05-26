import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

const HeaderHome = ({ slice }) => (
  <header id="headerLarge">
    <div id="companyNameContainer">
      <span>
        <h1>cartwright</h1>
        <blockquote>{slice.primary["small-paragraph"]}</blockquote>
      </span>
      <h1>international</h1>
    </div>
    <img
      src={slice.primary["header-image"].url}
      alt={slice.primary["header-image"].alt}
    />
  </header>
);

export default HeaderHome;
