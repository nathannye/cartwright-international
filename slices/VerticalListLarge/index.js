import React from "react";
import { PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import LargeListEntry from "../../components/LargeListEntry";

const VerticalListLarge = ({ slice }) => {
  return (
    <section className="verticalListLarge">
      {slice.items.map((entry, index) => (
        <LargeListEntry entry={entry} index={index} key={index} />
      ))}
    </section>
  );
};

export default VerticalListLarge;
