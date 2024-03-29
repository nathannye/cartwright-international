import React from "react";
import EventEntry from "../../components/EventEntry";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useState } from "react";
import EventPopup from "../../components/EventPopup";

const EventSlider = ({ slice }) => {
  const [popupData, setPopupData] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const tl = useRef(null);
  const sliderTL = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const q = gsap.utils.selector(popupRef.current);

    tl.current = gsap.timeline({
      paused: true,
    });
    gsap.set(q(".popupWrapper"), {
      autoAlpha: 0,
      y: 40,
    });

    tl.current.to(q(".popupWrapper"), {
      duration: 0.5,
      y: 0,
      ease: "power3.out",
    });
  });

  const showEventPopup = (item) => {
    setShowPopup(!showPopup);
    setPopupData(item);
  };

  gsap.registerPlugin(ScrollTrigger);
  const sliderRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const q = gsap.utils.selector(sliderRef.current);

    gsap.set(q("img#globe"), {
      x: -20,
    });

    sliderTL.current = gsap.timeline({
      scrollTrigger: {
        scrub: 1.25,
        pin: sliderRef.current,
        start: "top top",
        end: "+=1500",
        trigger: q("#eventSlider > div:not(#sliderBacker"),
      },
    });

    sliderTL.current
      .to(
        q("#eventSlider > div:not(#sliderBacker)"),
        {
          ease: "none",
          xPercent: -100,
        },
        0
      )
      .to(
        q("img#globe"),
        {
          x: 20,
          ease: "none",
        },
        0
      );

    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <EventPopup
        item={popupData}
        showPopup={showPopup}
        showEventPopup={showEventPopup}
      />
      <section id="eventSlider" ref={sliderRef}>
        <img src="./globeImage.jpg" alt="Image of globe" id="globe" />
        <a id="sliderLink"></a>
        <div style={{ width: (slice.items.length + 1) * 100 + "%" }}>
          {slice.items.map((item, index) => {
            return (
              <EventEntry
                key={index}
                item={item}
                // handleClick={showEventPopup}
                showEventPopup={showEventPopup}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default EventSlider;
