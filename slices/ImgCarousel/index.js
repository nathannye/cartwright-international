import gsap from "gsap";
import { Draggable } from "gsap/dist/Draggable";
import React from "react";
import { useRef } from "react";
import { createRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";

const ImgCarousel = ({ slice, children }) => (
  useIsomorphicLayoutEffect(() => {
    const dragger = createRef();
    Draggable.create(dragger, { type: "x", inertia: true });
  }),
  (
    <section className="imageCarousel">
      <div className="draggerContainer" ref={dragger}>
        {slice.items.map((item) => (
          <div key={item.image.url}>
            <img src={item.image.url} alt={item.image.alt} />
          </div>
        ))}
      </div>
      <h3>{slice.items.length}</h3>
    </section>
  )
);

export default ImgCarousel;
