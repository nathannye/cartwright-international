import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const EventEntry = ({ item, showEventPopup }) => {
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
          <div>
            <h2>{`${monthFinal} ${day} | ${item["start-time"]}–${item["end-time"]}`}</h2>
            <h1>{item["event-title"]}</h1>
            <p>{item["event-description"]}</p>
            <div className="eventButtons">
              <button
                onClick={() => {
                  showEventPopup(item);
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
