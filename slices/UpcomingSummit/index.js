import React, { useRef, useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import CustomForm from "../../components/CustomForm";
import MailchimpForm from "../../components/MailchimpForm";
import gsap from "gsap";
// import CountdownTimer from "../../components/CountdownTimer";

const UpcomingSummit = ({ slice }) => {
  console.log(slice.primary["reveal-date"]);

  // const summitRef = useRef(null);
  // const q = gsap.utils.selector(summitRef.current);

  return (
    <section id="upcomingSummit">
      <img
        src={slice.primary["background-image"].url}
        alt={slice.primary["background-image"].alt}
      />

      <div>
        <MailchimpForm heading={slice.primary["email-heading"]} />
        <h1>{slice.primary.heading}</h1>
        <h1>07:20:12:12:56</h1>
        <h1 id="summitDate">{slice.primary["summit-date"]}</h1>
      </div>
    </section>
  );
};

export default UpcomingSummit;
