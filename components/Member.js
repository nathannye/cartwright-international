import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import { PrismicRichText } from "@prismicio/react";

const Member = ({ entry, index }) => {
  const memberRef = useRef(null);
  const tl = useRef(null);
  const nameSplit = useRef(null);
  const bioSplit = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const q = gsap.utils.selector(memberRef.current);

    gsap.registerPlugin(ScrollTrigger, SplitText);

    nameSplit.current = new SplitText(q("h3"), {
      type: "words, lines",
      linesClass: "splitLineOverflow",
    });

    bioSplit.current = new SplitText(q("p"), {
      type: "lines",
    });

    gsap.set(nameSplit.current.words, {
      yPercent: 100,
    });
    gsap.set(bioSplit.current.lines, {
      y: 8,
      autoAlpha: 0,
    });

    gsap.set(q("h4"), {
      autoAlpha: 0,
    });

    gsap.set(q("a"), {
      autoAlpha: 0,
      y: 18,
    });

    gsap.set(q("h5"), {
      autoAlpha: 0,
    });

    gsap.set(q(".imageContainer"), {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: memberRef.current,
        start: "center bottom-=4%",
      },
      onComplete: () => {
        nameSplit.current.revert();
        bioSplit.current.revert();
      },
    });
    tl.current
      .to(
        q("h5"),
        {
          autoAlpha: 1,
          duration: 0.4,
          ease: "none",
        },
        0
      )
      .to(
        q(".imageContainer"),
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.5,
        },
        0
      )
      .to(
        nameSplit.current.words,
        {
          yPercent: 0,
        },
        0.1
      )
      .to(
        q("h4"),
        {
          autoAlpha: 1,
          duration: 0.6,
        },
        0.1
      )
      .to(
        bioSplit.current.lines,
        {
          y: 0,
          stagger: 0.06,
          ease: "power3.out",
          autoAlpha: 1,
        },
        0.2
      )
      .to(
        q("a"),
        {
          y: 0,
          autoAlpha: 1,
          ease: "power2.out",
        },
        0.2
      );

    return () => {
      ScrollTrigger.kill;
    };
  }, []);

  return (
    <div key={entry.name} className="teamMemberEntry" ref={memberRef}>
      <h5>{entry.position}</h5>
      <div className="imageContainer">
        <img src={entry.image.url} alt={entry.image.alt} />
      </div>
      <div className="teamMemberText">
        <h3>{entry.name}</h3>
        <PrismicRichText field={entry.bio} />
        <a href={`mailto:${entry.email}`} className="internalLink">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Member;
