import React, { useRef } from "react";
import Link from "next/link";
import { PrismicLink } from "@prismicio/react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";

const Quote = ({ slice }) => {
  const quoteRef = useRef(null);
  const split = useRef(null);
  const tl = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const q = gsap.utils.selector(quoteRef.current);

    split.current = new SplitText(q("blockquote"), {
      type: "lines",
    });

    gsap.set(split.current.lines, {
      y: 18,
      autoAlpha: 0,
    });

    gsap.set(q("a"), {
      y: 18,
      autoAlpha: 0,
    });

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: quoteRef.current,
        markers: true,
      },
    });

    tl.current
      .to(
        split.current.lines,
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.06,
          ease: "power3.out",
        },
        0
      )
      .to(q("a"), {
        y: 0,
        autoAlpha: 1,
        ease: "power3.out",
      });
  });

  return (
    <section className="quoteLarge" ref={quoteRef}>
      <h2>{slice.primary.heading}</h2>
      <blockquote>{slice.primary.quote}</blockquote>
      <PrismicLink field={slice.primary.link} className="internalLink">
        {slice.primary["link-label"]}
      </PrismicLink>
    </section>
  );
};

export default Quote;
