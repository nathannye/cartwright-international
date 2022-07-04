import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";

const Dropdown = ({ item }) => {
  const entryRef = useRef(null);
  const inTL = useRef(null);
  const dropTL = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const q = gsap.utils.selector(entryRef.current);

    inTL.current = gsap.timeline({
      scrollTrigger: {
        trigger: entryRef.current,
      },
    });

    gsap.set(q("span.lineTop"), {
      scaleX: 0,
      transformOrigin: "center left",
    });

    gsap.set(q("button"), {
      autoAlpha: 0,
    });

    gsap.set(q("h3"), {
      autoAlpha: 0,
    });

    inTL.current
      .to(
        q("h3"),
        {
          autoAlpha: 1,
          duration: 0.35,
          ease: "none",
        },
        0
      )
      .to(
        q("span.lineTop"),
        {
          scaleX: 1,
        },
        0.2
      )
      .to(
        q("button"),
        {
          autoAlpha: 1,
        },
        0.5
      );

    return () => {
      ScrollTrigger.kill;
      inTL.current.kill;
    };
  });

  useIsomorphicLayoutEffect(() => {
    const q = gsap.utils.selector(entryRef.current);

    dropTL.current = gsap.timeline({
      paused: true,
      reversed: true,
    });

    gsap.set(q("div.clipBox"), {
      maxHeight: 0,
    });

    dropTL.current
      .to(
        q("div.clipBox"),
        {
          maxHeight: 160,
          duration: 0.45,
          ease: "power2.inOut",
        },
        0
      )
      .to(
        q("button.toggleDropdownButton"),
        {
          rotate: 45,
          duration: 0.23,
          ease: "power3.inOut",
        },
        0
      );

    return () => {
      dropTL.current.kill;
    };
  }, []);

  const toggleDropdown = () => {
    dropTL.current.reversed()
      ? dropTL.current.timeScale(1).play()
      : dropTL.current.timeScale(1.5).reverse();
  };

  return (
    <div className="listEntry" ref={entryRef}>
      <span className="lineTop"></span>
      <div className="dropdownContentContainer">
        <div>
          <h3>{item.question}</h3>
          <div className="clipBox">
            <p>{item.answer}</p>
          </div>
        </div>
        <button
          className="toggleDropdownButton"
          onClick={toggleDropdown}
          ariaLabel="Toggle FAQ Dropdown"
        ></button>
      </div>
    </div>
  );
};

export default Dropdown;
