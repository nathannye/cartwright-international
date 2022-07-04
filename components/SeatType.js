const SeatType = ({}) => {
  return (
    <div className="seatType">
      <span>
        <h3>standard</h3>
        <p>15 left </p>
      </span>
      <div>
        <ul className="ticketPerks">
          <li>Access to virtual event</li>
          <li>Access to virtual event</li>
          <li>Access to virtual event</li>
        </ul>
        <div>
          <button>Reserve seat</button>
          <h3>$399</h3>
        </div>
      </div>
    </div>
  );
};

export default SeatType;
