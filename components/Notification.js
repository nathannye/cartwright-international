import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";

const Notification = () => {
  const notiRef = useRef();

  useIsomorphicLayoutEffect(() => {
    gsap.set(notiRef.current, {
      yPercent: 100,
    });

    setTimeout(() => {
      gsap.to(notiRef.current, {
        yPercent: 0,
        ease: "power3.inOut",
        duration: 0.82,
      });
    }, 1200);
  }, []);

  const decline = () => {
    gsap.to(notiRef.current, {
      yPercent: 100,
      ease: "power3.inOut",
      duration: 0.67,
      onComplete: () => {
        notiRef.current.style.display = "none";
      },
    });
  };

  const accept = () => {
    gsap.to(notiRef.current, {
      yPercent: 100,
      ease: "power3.inOut",
      duration: 0.67,
      onComplete: () => {
        notiRef.current.style.display = "none";
      },
    });

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="notification" ref={notiRef}>
      <div>
        <h3>Hey, want the latest sales tips?</h3>
        <div className="notificationButtons">
          <button onClick={accept}>sign me up!</button>
          <button onClick={decline}>no, thanks</button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
