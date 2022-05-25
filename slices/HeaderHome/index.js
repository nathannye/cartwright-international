import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

const HeaderHome = ({ slice }) => (
  <header id="headerLarge">
    <div id="companyNameContainer">
      <span>
        <h1>cartwright</h1>
        <blockquote>
          A sales training and consulting agency with a vision to make sales
          teams a true driver of business
        </blockquote>
      </span>
      <h1>international</h1>
    </div>
    <img src="https://picsum.photos/1600/600" alt="thing" />
  </header>
);

export default HeaderHome;
