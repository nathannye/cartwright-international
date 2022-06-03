import React from "react";
import { useRef, useLayoutEffect } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import { PrismicText } from "@prismicio/react";s

const VerticalListSmall = ({ slice }) => {
  const listRefs = useRef([]);
  listRefs.current = [];
  const q = gsap.utils.selector(listRefs.current);

  const listContainerRef = useRef(null);

  const addListRef = (el) => {
    if (el && !listRefs.current.includes(el)) {
      listRefs.current.push(el);
    }
  };

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    listRefs.current.forEach((li, index) => {
      gsap.set(li.children[0], {
        scaleX: 0,
        transformOrigin: "center left",
      });
      gsap.set(li.children[1], {
        opacity: 0,
      });
      gsap.set(li.children[2], {
        opacity: 0,
      });

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: li,
        },
        delay: index / 7,
      });

      tl.to(
        li.children[0],
        {
          scaleX: 1,
          duration: 1,
          ease: "power4.inOut",
          delay: 0.15,
        },
        0
      )
        .to(
          li.children[1],
          {
            opacity: 1,
            duration: 0.75,
          },
          0
        )
        .to(
          li.children[2],
          {
            opacity: 1,
            delay: 0.25,
            duration: 0.75,
          },
          0
        );
    });

    return () => {
      ScrollTrigger.kill;
    };
  }, []);

  return (
    <section
      className={`verticalListSmall${
        slice.variation == "verticalListWithDescription"
          ? " hasDescription"
          : ""
      }`}
    >
      <span className="verticalListHeading">
        <h2>{slice.primary.title}</h2>
      </span>
      <div className="verticalListEntries" ref={listContainerRef}>
        <p className="sectionDescription">{slice.primary.description}</p>
        <div>
          {slice.items.map((item) => (
            <div className="listEntry" key={item.heading} ref={addListRef}>
              <span className="lineTop"></span>
              <h3>{item.heading}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalListSmall;
