import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import gsap from "gsap";

export default function HeaderHome({ slice }) {
  const imageRef = useRef();
  const tl = useRef();

  gsap.defaults({
    duration: 0.96,
    ease: "power4.inOut",
  });

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap
      .timeline({
        paused: true,
      })
      .fromTo(
        imageRef.current,
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
      );
  }, []);

  return (
    <header id="headerLarge">
      <svg>
        <filter
          id="filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="turbulence"
            baseFrequency="0.036 0.016"
            numOctaves="14"
            seed="1"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="24"
            xChannelSelector="R"
            yChannelSelector="R"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="displacementMap"
          />
        </filter>
      </svg>
      <div id="companyNameContainer">
        <span>
          <h1>cartwright</h1>
          <blockquote>{slice.primary["small-paragraph"]}</blockquote>
        </span>
        <h1>international</h1>
      </div>
      <div className="imageContainer" ref={imageRef}>
        {" "}
        <img
          src={slice.primary["header-image"].url}
          alt={slice.primary["header-image"].alt}
        />
      </div>
    </header>
  );
}
