import React from "react";

const ImgCarousel = ({ slice }) => (
  <section className="imageCarousel">
    <div className="draggerContainer">
      {slice.items.map((item) => (
        <div>
          <img src={item.image.url} alt={item.image.alt} />
        </div>
      ))}
    </div>
  </section>
);

export default ImgCarousel;
