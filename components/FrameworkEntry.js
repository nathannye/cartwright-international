import { useRef } from "react";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

const FrameworkEntry = ({ entry, index }) => {
  const containerRef = useRef(null);
  const tl = useRef(null);
  const smallSplit = useRef(null);
  const paraSplit = useRef(null);
  const headerSplit = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const q = gsap.utils.selector(containerRef.current);
    let maroonIcon = q(".iconContainer:first-of-type");
    let whiteIcon = q(".iconContainer:nth-of-type(2)");

    smallSplit.current = new SplitText(q(".cardInfo h3"), {
      type: "words, lines",
      linesClass: "splitLineOverflow",
    });

    gsap.set(smallSplit.current.split.words, {
      yPercent: 100,
    });

    headerSplit.current = new SplitText(q(".frameworkText h3"), {
      type: "words, lines",
      linesClass: "splitLineOverflow",
    });

    gsap.set(headerSplit.current.words, {
      yPercent: -100,
    });

    paraSplit.current = new SplitText(q(".frameworkText p"), {
      type: "lines",
    });

    gsap.set(paraSplit.current.lines, {
      y: 8,
      autoAlpha: 0,
    });

    gsap.set(maroonIcon, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });

    gsap.set(whiteIcon, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    });

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center bottom-=7%",
      },
      onComplete: () => {
        headerSplit.current.revert();
        paraSplit.current.revert();
        smallSplit.current.revert();
      },
    });

    tl.current
      .to(
        maroonIcon,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
        },
        0
      )
      .to(
        whiteIcon,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
        },
        0
      )
      .to(
        smallSplit.current.words,
        {
          yPercent: 0,
          stagger: 0.07,
        },
        0
      )
      .to(
        headerSplit.current.words,
        {
          yPercent: 0,
          duration: 0.85,
          ease: "power4.inOut",
          stagger: 0.1,
        },
        0.3
      )
      .to(
        paraSplit.current.lines,
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.06,
          ease: "power3.out",
        },
        0.75
      );
  }, []);

  return (
    <div
      className={`frameworkEntry ${entry.title.toLowerCase()}`}
      key={index}
      ref={containerRef}
    >
      <div className="frameworkCard">
        <img className="oliveBranch" src="oliveBranch.svg" alt="" />
        <div className="cardInfo">
          <h3 className="entryNumber">{`0${index + 1}`}</h3>
          <h3 className="entryName">{entry.title}</h3>
        </div>
        <div className="iconContainer whiteIcon">
          <img src={`./${entry.title.toLowerCase()}White.svg`} />
        </div>
        <div className="iconContainer maroonIcon">
          <img src={`./${entry.title.toLowerCase()}Maroon.svg`} />
        </div>
      </div>
      <div className="frameworkText">
        <h3>{entry.heading}</h3>
        <p>{entry.description}</p>
      </div>
    </div>
  );
};

export default FrameworkEntry;
