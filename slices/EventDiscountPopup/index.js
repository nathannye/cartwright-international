import React, { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import MailchimpForm from "../../components/MailchimpForm";
import gsap from "gsap";

const EventDiscountPopup = ({ slice }) => {
  const discountRef = useRef(null);

  const tl = useRef(null);

  tl.current = gsap.timeline({
    paused: true,
  });

  useIsomorphicLayoutEffect(() => {
    const q = gsap.utils.selector(discountRef.current);

    discountRef.current.style.display = "none";

    gsap.set(q(".popupCoverBacker"), {
      autoAlpha: 0,
    });

    gsap.set(q("#discountNotification"), {
      y: 20,
      autoAlpha: 0,
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    tl.current
      .to(
        discountRef.current,
        {
          display: "flex",
          duration: 0.01,
        },
        0
      )
      .to(
        q(".popupCoverBacker"),
        {
          autoAlpha: 0.76,
          duration: 0.5,
        },
        0.1
      )
      .to(
        q("#discountNotification"),
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power3.out",
        },
        0.3
      );

    setTimeout(() => {
      tl.current.play();
    }, 7000);

    return () => {
      tl.current.kill;
    };
  }, []);

  const dismissDiscount = () => {
    tl.current.reverse();
  };

  return (
    <div id="discountNotificationWrapper" ref={discountRef}>
      <div id="discountNotification">
        <h3>{slice.primary.heading}</h3>
        <h5>{slice.primary.description}</h5>
        <div>
          <MailchimpForm heading={slice.primary["form-heading"]} />
          <button className="inverted" onClick={dismissDiscount}>
            {slice.primary["dismiss-button-text"]}
          </button>
        </div>
      </div>
      <div className="popupCoverBacker" onClick={dismissDiscount}></div>
    </div>
  );
};

export default EventDiscountPopup;
