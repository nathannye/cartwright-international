import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import gsap from "gsap";
import Cookies from "universal-cookie";

const CookieOptOut = ({ setAllowCookies, setHasElected }) => {
  const cookieRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.set(cookieRef.current, {
      yPercent: 0,
    });
  });

  const handleCookie = (state) => {
    setAllowCookies(state);
    setHasElected(true);
    if (setHasElected) {
      const cookies = new Cookies();
      cookies.set("hasElected", state, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    }
    gsap.to(cookieRef.current, {
      yPercent: 100,
      ease: "power3.inOut",
      duration: 0.5,
    });
  };

  return (
    <div
      className={`notification ${
        setHasElected(true) && setAllowCookies(true) ? "hidden" : ""
      }`}
      id="cookieNotification"
      ref={cookieRef}
    >
      <div>
        <p>
          {
            "We use cookies to help improve your experience with analytics. Is this okay with you?"
          }
        </p>
        <div className="notificationButtons">
          <button onClick={() => handleCookie(true)}>
            That’s cool with me!
          </button>
          <button onClick={() => handleCookie(false)}>no, thanks.</button>
        </div>
      </div>
    </div>
  );
};

export default CookieOptOut;
