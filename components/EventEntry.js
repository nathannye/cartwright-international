import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

const EventEntry = ({ st, index, item }) => {
  const showEventPopup = (event) => {};
  const eventRef = useRef(null);
  const split = useRef(null);
  const paraSplit = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const tl = useRef(null);

  const day = item["start-time"].substr(8, 2);
  const monthConversion = item["start-time"].substr(5, 2);

  function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", {
      month: "long",
    });
  }

  const monthFinal = toMonthName(monthConversion);

  const firstDigit = parseInt(day.charAt(0));
  const secondDigit = parseInt(day.charAt(1));

  // console.log(item["start-time"]);

  const firstSlot = [
    firstDigit,
    firstDigit + 1,
    firstDigit + 2,
    firstDigit + 3,
    firstDigit + 4,
  ];

  const secondSlot = [
    secondDigit,
    secondDigit + 1,
    secondDigit + 2,
    secondDigit + 3,
    secondDigit + 4,
  ];
  useIsomorphicLayoutEffect(() => {
    const q = gsap.utils.selector(eventRef.current);

    tl.current = gsap.timeline({
      scrollTrigger: {
        start: "left center",
        trigger: q("h1"),
        containerAnimation: st,
        id: index,
      },
    });
    paraSplit.current = new SplitText(q("p"), {
      type: "words, lines",
      linesClass: "splitLineOverflow",
    });

    gsap.set(paraSplit.current.words, {
      opacity: 0,
      y: 7,
    });

    split.current = new SplitText(q("h3"), {
      type: "words, lines",
      linesClass: "splitLineOverflow",
    });

    gsap.set(split.current.words, {
      yPercent: -100,
    });

    gsap.set(q("h1"), {
      autoAlpha: 0,
    });

    tl.current
      .to(
        q("h1"),
        {
          scrollTrigger: {
            start: "left center",
            trigger: q("h1"),
            containerAnimation: st,
            id: index,
          },
        },
        0
      )
      .to(
        split.current.words,
        {
          yPercent: 0,
          stagger: 0.06,
          duration: 0.85,
          ease: "power3.inOut",
        },
        0
      )
      .to(
        paraSplit.current.words,
        {
          opacity: 1,
          y: 0,
        },
        0
      )
      .to(
        q(".firstDigit h1"),
        {
          yPercent: (firstSlot.length - 1) * 100,
          autoAlpha: 1,
        },
        0.1
      )
      .to(
        q(".secondDigit h1"),
        {
          yPercent: (secondSlot.length - 1) * 100,
          autoAlpha: 1,
        },
        0.2
      );
  });

  return (
    <>
      <div className="eventEntry" ref={eventRef}>
        <div className="eventEntryContentWrapper">
          <div className="eventMonthMarker">
            <h2>{monthFinal}</h2>
          </div>
          <div className="eventInfo">
            <div className="dateNumberContainer">
              <div className="firstDigit">
                <div>
                  {firstSlot.map((d, index) => {
                    return <h1 key={index}>{d}</h1>;
                  })}
                </div>
              </div>
              <div className="secondDigit">
                <div>
                  {secondSlot.map((d, index) => {
                    return <h1 key={index}>{d}</h1>;
                  })}
                </div>
              </div>
            </div>
            <div>
              <h5>{item["start-time"]}</h5>
              <h3>{item["event-title"]}</h3>
              <p>{item["event-description"]}</p>
              <div className="eventButtons">
                <p>50% sold out</p>
                <button onClick={showEventPopup} onBlur={showEventPopup}>
                  Reserve a seat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventEntry;
