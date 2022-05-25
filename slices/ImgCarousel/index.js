import React from "react";
import { PrismicRichText } from "@prismicio/react";

const ImgCarousel = ({ slice }) => (
  <section className="imageCarousel">
    <div className="draggerContainer">
      <div>
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <div>
        <img src="https://picsum.photos/200/320" alt="" />
      </div>
      <div>
        <img src="https://picsum.photos/250/300" alt="" />
      </div>
      <div>
        <img src="https://picsum.photos/201/300" alt="" />
      </div>
      <div>
        <img src="https://picsum.photos/200/400" alt="" />
      </div>
    </div>
  </section>
);

export default ImgCarousel;
