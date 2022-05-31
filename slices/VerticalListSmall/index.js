import React from "react";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { PrismicText } from "@prismicio/react";s

const VerticalListSmall = ({ slice }) => {
  const listRefs = useRef([]);
  const tl = useRef(null);
  listRefs.current = [];

  const listContainerRef = useRef(null);

  const addListRef = (el) => {
    if (el && !listRefs.current.includes(el)) {
      listRefs.current.push(el);
    }
  };

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    listRefs.current.forEach((li, index) => {
      gsap.set(li.querySelector("span.lineTop"), {
        scaleX: 0,

        transformOrigin: "center left",
      });
      gsap.set([li.querySelector("h3"), li.querySelector("p")], {
        opacity: 0,
      });

      tl = gsap.timeline({
        scrollTrigger: {
          start: "top bottom-=17%",
          trigger: li,
        },
        delay: index / 8,
      });

      tl.to(
        li.querySelector("span.lineTop"),
        {
          scaleX: 1,
          duration: 1,
          ease: "power4.inOut",
          delay: 0.15,
        },
        0,
        "line"
      )
        .to(
          li.querySelector("h3"),
          {
            opacity: 1,
            duration: 0.75,
          },
          0
        )
        .to(
          li.querySelector("p"),
          {
            opacity: 1,
            delay: 0.25,
            duration: 0.75,
          },
          0
        );
    });

    const resize = () => {
      ScrollTrigger.refresh;
    };

    window.addEventListener("resize", resize);

    return () => {
      ScrollTrigger.kill;
    };
  }, []);

  return (
    <section className="verticalListSmall">
      <span className="verticalListHeading">
        <h2>{slice.primary.title}</h2>
      </span>
      <div className="verticalListEntries" ref={listContainerRef}>
        <p>{slice.primary.description}</p>
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
