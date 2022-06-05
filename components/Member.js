import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

const Member = ({ entry, index }) => {
  const memberRef = useRef(null);
  const svgRef = useRef(null);

  const tl = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const q = gsap.utils.selector(memberRef.current);
    const v = gsap.utils.selector(svgRef.current);

    gsap.registerPlugin(ScrollTrigger, SplitText);

    let nameSplit = new SplitText(q("h3"), {
      type: "words, lines",
      linesClass: "splitLineOverflow",
    });

    let bioSplit = new SplitText(q("p"), {
      type: "lines",
    });

    gsap.set(nameSplit.words, {
      yPercent: 100,
    });
    gsap.set(bioSplit.lines, {
      y: 8,
      autoAlpha: 0,
    });

    gsap.set(q("h4"), {
      autoAlpha: 0,
    });

    gsap.set(v("#turbulence"), {
      attr: {
        baseFrequency: ".012 .012",
      },
    });

    gsap.set(v("#displace"), {
      attr: {
        scale: "100",
      },
    });

    gsap.set(q("a"), {
      autoAlpha: 0,
      y: 8,
    });

    gsap.set(q(".imageContainer"), {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: memberRef.current,
        // markers: true,
        // scrub: true,
      },
    });
    tl.current
      .to(
        q(".imageContainer"),
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.5,
        },
        0
      )
      .to(
        v("#turbulence"),
        {
          attr: {
            baseFrequency: "0 0",
          },
          duration: 1.5,
          ease: "circ.out",
        },
        0
      )
      .to(
        v("#displace"),
        {
          attr: {
            scale: "40",
          },
          duration: 1,
          ease: "circ.out",
        },
        0
      )
      .to(
        nameSplit.words,
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
        bioSplit.lines,
        {
          y: 0,
          stagger: 0.06,
          ease: "power3.out",
          autoAlpha: 1,
        },
        0.2
      )
      .to(q("a"), {
        y: 0,
        ease: "power3.out",
      });

    return () => {
      ScrollTrigger.kill;
      nameSplit.revert();
      bioSplit.revert();
    };
  }, []);

  return (
    <>
      <svg ref={svgRef} width={400} height={700}>
        <filter id="noise">
          <feTurbulence result="NOISE" numOctaves="1" id="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="NOISE" id="displace" />
        </filter>
      </svg>
      <div key={entry.name} className="teamMemberEntry" ref={memberRef}>
        <h4>{entry.position}</h4>
        <div className="imageContainer">
          <img src={entry.image.url} alt={entry.image.alt} />
        </div>
        <div className="teamMemberText">
          <h3>{entry.name}</h3>
          <p>{entry.bio}</p>
          <a href={`mailto:${entry.email}`} className="internalLink">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Member;
