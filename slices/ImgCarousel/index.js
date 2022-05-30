import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";
import InertiaPlugin from "gsap/dist/InertiaPlugin";
import { VelocityTracker } from "gsap/dist/InertiaPlugin";
import React from "react";
import { useRef } from "react";
import { createRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
export default function ImgCarousel({ slice, children }) {
  const draggerRef = useRef(null);
  const boundRef = useRef(null);
  const dragInstance = useRef(null);
  const draggerImagesRef = useRef([]);
  draggerImagesRef.current = [];
  const cursorRef = useRef();

  const addImageRef = (el) => {
    if (el && !draggerImagesRef.current.includes(el)) {
      draggerImagesRef.current.push(el);
    }
  };
  // Cursor Iso
  useIsomorphicLayoutEffect(() => {
    window.addEventListener("mousemove", (event) => {
      let x = event.clientX;
      let y = event.clientY;

      // cursorRef.current.style.top = `${y}px`;
      // cursorRef.current.style.left = `${x}px`;
    });

    // draggerRef.current.addEventListener("mouseover", (event) => {
    //   gsap.to(cursorRef, {
    //     scale: 1,
    //   });
    // });
  });

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(Draggable, InertiaPlugin, ScrollTrigger);

    gsap.set(draggerImagesRef.current, {
      yPercent: 8,
      autoAlpha: 0,
    });

    gsap.to(draggerImagesRef.current, {
      yPercent: 0,
      autoAlpha: 1,
      stagger: 0.22,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: draggerRef.current,
        start: "top bottom-=12%",
      },
    });

    dragInstance.current = Draggable.create(draggerRef.current, {
      type: "x",
      inertia: true,
      edgeResistance: 0.85,
      bounds: boundRef.current,
      // onDragStart: () => {
      //   gsap.to(draggerImagesRef.current, {
      //     scale: () => {
      //       // var vx = tracker.get("x");
      //       // console.log(s);
      //     },
      //     duration: 0.35,
      //   });
      // },
      // onDragEnd: () => {
      //   gsap.to(draggerImagesRef.current, {
      //     scale: 1,
      //     duration: 0.35,
      //   });
      // },
    });
    ScrollTrigger.refresh;
    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.kill;
      }
      if (Draggable) {
        Draggable.kill;
      }
    };
  }, []);

  return (
    <section className="imageCarousel" ref={boundRef}>
      <div id="carouselCursor" ref={cursorRef}></div>
      <div className="draggerContainer" ref={draggerRef}>
        {slice.items.map((item) => (
          <div key={item.image.url} ref={addImageRef}>
            <img src={item.image.url} alt={item.image.alt} />
          </div>
        ))}
      </div>
      <h3>{slice.items.length}</h3>
    </section>
  );
}
