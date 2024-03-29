const calculateTimeLeft = () => {
  const difference = +new Date(`02/07/2023`) - +new Date();

  var timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    if (timeLeft.hours < 10) {
      timeLeft.hours = `0${timeLeft.hours}`;
    }

    if (timeLeft.minutes < 10) {
      timeLeft.hours = `0${timeLeft.minutes}`;
    }

    if (timeLeft.seconds < 10) {
      timeLeft.seconds = `0${timeLeft.seconds}`;
    }
  }

  return timeLeft;
};

export default calculateTimeLeft;
