import React, { useRef, useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import CustomForm from "../../components/CustomForm";
import MailchimpForm from "../../components/MailchimpForm";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import calculateTimeLeft from "../../components/CountdownTimer";

const UpcomingSummit = ({ slice }) => {
  const summitRef = useRef();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useIsomorphicLayoutEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]}
        <span className="timerSeparator">{":"}</span>
      </span>
    );
  });

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const q = gsap.utils.selector(summitRef.current);

    gsap.set(q("img"), {
      yPercent: -30,
      scaleX: 1.1,
    });

    gsap.to(q("img"), {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: q("img"),
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });
  });

  return (
    <section id="upcomingSummit" ref={summitRef}>
      <img
        src={slice.primary["background-image"].url}
        alt={slice.primary["background-image"].alt}
      />
      <div>
        <MailchimpForm heading={slice.primary["email-heading"]} />
        <h1>{slice.primary.heading}</h1>
        <h1 id="timer">
          {timerComponents.length ? timerComponents : <span>stay tuned!</span>}
        </h1>
        <h1 id="summitDate">{slice.primary["summit-date"]}</h1>
      </div>
    </section>
  );
};

export default UpcomingSummit;
