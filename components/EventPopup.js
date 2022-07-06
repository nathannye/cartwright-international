import SeatType from "./SeatType";
import gsap from "gsap";

const EventPopup = ({ item, showEventPopup, showPopup }) => {
  return (
    <div className={`popupWrapper ${showPopup ? "visible" : ""}`}>
      <div className="eventPopup">
        <div className="popupInfoHeader">
          <div className="headerText">
            <h2>
              {item["start-time"]}–{item["end-time"]}
            </h2>
            <div>
              <h3>{item["event-title"]}</h3>
              <p>{item["event-description"]}</p>
            </div>
          </div>
        </div>
        <div className="seatingList">
          <h2>seats are limited, reserve today!</h2>
          <SeatType />
          <SeatType />
          <SeatType />
        </div>
      </div>
      <div
        className="popupCoverBacker"
        // onClick={showEventPopup}
        // onBlur={showEventPopup}
      ></div>
    </div>
  );
};

export default EventPopup;
