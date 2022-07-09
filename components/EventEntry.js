import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import gsap from "gsap";
import { Date as PrismicDate } from "@prismicio/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import { format } from "date-fns-tz";

const EventEntry = ({ st, index, item, handleClick }) => {
  const d = item["event-date"];

  const eventRef = useRef(null);
  const split = useRef(null);
  const paraSplit = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const tl = useRef(null);
  const day = item["event-date"].substr(8, 2);
  const monthConversion = item["event-date"].substr(5, 2);

  function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", {
      month: "long",
    });
  }

  const monthFinal = toMonthName(monthConversion);

  return (
    <div className="eventEntry" ref={eventRef}>
      <div className="eventEntryContentWrapper">
        <div className="eventMonthMarker">
          <h2>{monthFinal}</h2>
        </div>
        <div className="eventInfo">
          <div className="dateNumberContainer"></div>
          <div>
            <h2>{`${monthFinal} ${day} | ${item["start-time"]}–${item["start-time"]}`}</h2>
            <h1>{item["event-title"]}</h1>
            <p>{item["event-description"]}</p>
            <div className="eventButtons">
              {/* <p>{item["percentage-sold"]}% sold out</p> */}
              <button
                onClick={() => {
                  handleClick(item);
                }}
                onBlur={() => {
                  handleClick(item);
                }}
              >
                Reserve a seat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventEntry;
