const EventPopup = ({ item, showPopup, showEventPopup }) => {
  return (
    <div className={`popupWrapper ${showPopup ? "visible" : ""}`}>
      <div className="eventPopup">
        <div className="popupInfoHeader">
          <div className="headerText">
            <h2>
              {item["start-time"]}–{item["end-time"]}
            </h2>
            <div>
              <h1>{item["event-title"]}</h1>
              <p>{item["event-description"]}</p>
            </div>
          </div>
        </div>
        <div className="seatingList">
          <h2>seats are limited, reserve today!</h2>
          <div className="seatType">
            <span>
              <h3>Basic</h3>
              {/* <p>15 left </p> */}
            </span>
            <div>
              <ul className="ticketPerks">
                <li>Access to virtual event</li>
              </ul>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="ticketBuyLink"
              >
                <button>Reserve seat</button>
                <h3>$99</h3>
              </a>
            </div>
          </div>

          <div className="seatType">
            <span>
              <h3>Executive</h3>
              {/* <p>15 left </p> */}
            </span>
            <div>
              <ul className="ticketPerks">
                <li>Access to virtual event</li>
                <li>Permanent access to event recording</li>
              </ul>
              <div>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <button>Reserve seat</button>
                  <h3>$199</h3>
                </a>
              </div>
            </div>
          </div>
          <div className="seatType">
            <span>
              <h3>VIP</h3>
              {/* <p>15 left </p> */}
            </span>
            <div>
              <ul className="ticketPerks">
                <li>Access to virtual event</li>
                <li>Permanent access to event recording</li>
                <li>Join our 1 on 1 15-minute QA afterwards!</li>
              </ul>
              <div>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <button>Reserve seat</button>
                  <h3>$499</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="popupCoverBacker" onClick={showEventPopup}></div>
    </div>
  );
};

export default EventPopup;
