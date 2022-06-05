import { useRef } from "react";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

const FrameworkEntry = ({ entry, index }) => {
  const containerRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const q = gsap.utils.selector(containerRef.current);
    let maroonIcon = q(".iconContainer:first-of-type");
    let whiteIcon = q(".iconContainer:nth-of-type(2)");
    let smallText = q(".cardInfo > h3");
    let header = q(".frameworkText h3");
    let para = q(".frameworkText p");

    smallText.split = new SplitText(smallText, {
      type: "words, lines",
      linesClass: "splitLineOverflow",
    });

    gsap.set(smallText.split.words, {
      yPercent: 100,
    });

    header.split = new SplitText(header, {
      type: "words, lines",
      linesClass: "splitLineOverflow",
    });

    gsap.set(header.split.words, {
      yPercent: -100,
    });

    para.split = new SplitText(para, {
      type: "lines",
    });

    gsap.set(para.split.lines, {
      y: 8,
      autoAlpha: 0,
    });

    gsap.set(maroonIcon, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });

    gsap.set(whiteIcon, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });

    tl.to(
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
        smallText.split.words,
        {
          yPercent: 0,
          stagger: 0.07,
        },
        0
      )
      .to(
        header.split.words,
        {
          yPercent: 0,
          duration: 0.85,
          ease: "power4.inOut",
          stagger: 0.1,
        },
        0.3
      )
      .to(
        para.split.lines,
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
