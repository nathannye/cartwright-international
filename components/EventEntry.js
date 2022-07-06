import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

const EventEntry = ({ st, index, item, clickHandler, showEventPopup }) => {
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
        paraSplit.current.words,
        {
          opacity: 1,
          y: 0,
        },
        0
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
              {/* <div className="firstDigit">
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
              </div> */}
            </div>
            <div>
              <h5>{item["start-time"]}</h5>
              <h1>{item["event-title"]}</h1>
              <p>{item["event-description"]}</p>
              <div className="eventButtons">
                <p>50% sold out</p>
                <button
                  onClick={() => {
                    clickHandler(item);
                  }}
                  onBlur={() => {
                    clickHandler(item);
                  }}
                >
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
