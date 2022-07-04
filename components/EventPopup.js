import SeatType from "./SeatType";

const EventPopup = ({}) => {
  return (
    <>
      <div className="popupWrapper">
        <div className="eventPopup">
          <div className="popupInfoHeader">
            <div className="headerText">
              <h2>timey time</h2>
              <div>
                <h3>Consistency</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, incidunt. Tempora ea facere non quis magnam dicta
                  voluptate praesentium. Autem eveniet pariatur voluptatum
                  adipisci. Tenetur assumenda eius porro debitis dignissimos.
                </p>
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
        <div className="popupCoverBacker"></div>
      </div>
    </>
  );
};

export default EventPopup;
