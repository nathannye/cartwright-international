import React from "react";
import { PrismicRichText } from "@prismicio/react";

const ImgCarousel = ({ slice }) => (
  <section className="imageCarousel">
    <div className="draggerContainer">
      <div className="imageContainer">
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <div className="imageContainer">
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <div className="imageContainer">
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <div className="imageContainer">
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <div className="imageContainer">
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <div className="imageContainer">
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
    </div>
  </section>
);

export default ImgCarousel;
