import Link from "next/link";
import { PrismicLink } from "@prismicio/react";
import { useRef, useState } from "react";
import Lottie from "lottie-web/build/player/lottie_light";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import SplitText from "gsap/dist/SplitText";
import animationData from "../public/lottie/hamburgerAnim.json";
import { useRouter } from "next/router";

const Navbar = ({ menu }) => {
  const desktopNavRef = useRef(null);
  const mobileNavRef = useRef(null);
  const linkRefs = useRef([]);
  linkRefs.current = [];
  const router = useRouter();
  const transitionRef = useRef(null);
  const animationContainer = useRef(null);
  const anim = useRef(null);
  const logoRef = useRef(null);
  const introtl = useRef(null);

  const [isActive, setIsActive] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const n = gsap.utils.selector(desktopNavRef.current);
    const g = gsap.utils.selector(logoRef.current);

    introtl.current = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        introtl.current.kill();
      },
    });

    gsap.set(n("a"), {
      opacity: 0,
    });

    gsap.set(g("svg.logo"), {
      opacity: 0,
    });

    introtl.current
      .to(
        n("a"),
        {
          duration: 0.75,
          opacity: 1,
          stagger: 0.1,
          delay: 0.23,
          ease: "power1.out",
        },
        0
      )
      .to(
        g("svg.logo"),
        {
          duration: 0.75,
          opacity: 1,
          ease: "power1.out",
        },
        0
      );
  }, []);

  useIsomorphicLayoutEffect(() => {
    const q = gsap.utils.selector(transitionRef.current);
    let timer;

    gsap.set(q("div.transitionCover"), {
      scaleY: 0,
      autoAlpha: 1,
      transformOrigin: "center bottom",
    });

    const aniStart = async () => {
      setIsActive(true);

      gsap.to(q("div.transitionCover"), {
        scaleY: 1,
        duration: 0.72,
        ease: "power3.inOut",
        stagger: -0.18,
        onComplete: () => {
          if (document.body.classList.contains("isLight")) {
            document.body.classList.remove("isLight ");
          }
        },
      });
    };

    const aniEnd = () => {
      if (isActive) {
        gsap.to(q("div.transitionCover"), {
          autoAlpha: 0,
          duration: 0.6,
          delay: 1.3,
          ease: "none",
          stagger: -0.18,
        });
      }
    };

    router.events.on("routeChangeStart", aniStart);
    router.events.on("routeChangeComplete", aniEnd);
    router.events.on("routeChangeError", aniEnd);

    return () => {
      router.events.off("routeChangeStart", aniStart);
      router.events.off("routeChangeComplete", aniEnd);
      router.events.off("routeChangeError", aniEnd);
    };
  }, [router]);

  const masterTL = gsap.timeline({
    paused: true,
  });

  const addLinkRef = (el) => {
    if (el && !linkRefs.current.includes(el)) {
      linkRefs.current.push(el);
    }
  };

  masterTL.reversed(true);

  useIsomorphicLayoutEffect(() => {
    if (animationContainer.current) {
      anim.current = Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
      });

      anim.current.setSpeed(1.75);

      return () => anim.current.destroy();
    }
  });

  // Mobile Nav Iso
  useIsomorphicLayoutEffect(() => {
    const q = gsap.utils.selector(mobileNavRef.current);

    linkRefs.current.forEach((link, index) => {
      link.split = new SplitText(link, {
        type: "lines, words",
        linesClass: "splitLineOverflow",
      });

      gsap.set(link.split.words, {
        yPercent: -100,
      });

      let tween = gsap.to(
        link.split.words,
        {
          yPercent: 0,
          stagger: 0.06,
          duration: 0.72,
          delay: index / 10,
        },
        0.1
      );

      masterTL.add(tween, 0.1);
    });

    gsap.set(mobileNavRef.current, {
      xPercent: 100,
      autoAlpha: 0,
    });

    gsap.set(q("a.active .activeIndi"), {
      x: -15,
      transformOrigin: "center top",
    });

    gsap.set(q("span.lineTop"), {
      scaleX: 0,
      transformOrigin: "left center",
    });

    masterTL
      .to(
        mobileNavRef.current,
        {
          xPercent: 0,
          autoAlpha: 1,
          duration: 0.65,
          ease: "power4.inOut",
        },
        0
      )
      .to(
        q("span.lineTop"),
        {
          scaleX: 1,
          stagger: 0.06,
        },
        0.1
      )
      .to(
        q("a.active h1"),
        {
          x: "1.75rem",
          duration: 0.6,
          ease: "power4.inOut",
        },
        1
      )
      .to(
        q("a.active .activeIndi"),
        {
          x: 0,
          delay: 0.19,
          duration: 0.64,
          ease: "back.out(1.5)",
        },
        "<"
      );

    gsap.registerPlugin(SplitText);
  });

  var direction = -1;

  const burgerToggle = ({ currentTarget }) => {
    masterTL.reversed()
      ? masterTL.timeScale(1).play()
      : masterTL.timeScale(1.4).reverse();
    anim.current.setDirection((direction *= -1));
    anim.current.play();
  };

  return (
    <>
      <div id="navbar" ref={logoRef}>
        <Link href="/">
          <svg
            className="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 196.78 178.8"
          >
            <g id="uuid-c4b7a30f-57f8-4315-a768-9e86d4545bd5">
              <g>
                <g>
                  <path
                    d="M129.1,45.97c1.15,.64,1.27,.89,1.4,2.93l1.66,15.55c0,.51-1.4,.77-1.53,.13-4.08-13.9-12.62-21.29-26.39-21.29-20.78,0-34.93,14.92-34.93,38.5s15.94,40.03,35.57,40.03c13.64,0,21.8-6.76,26.77-20.65,.13-.51,1.4-.25,1.4,.13l-1.27,14.28c-.25,2.04-.38,2.29-1.53,2.93-8.8,4.08-15.94,5.48-25.5,5.48-27.03,0-46.28-16.96-46.28-41.82s19.76-40.92,46.53-40.92c10.2,0,17.08,1.4,24.1,4.72Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M119.43,130.65c.49,0,.49,1.96,0,1.96-5.39,0-11.91-.33-19.75-.33-7.34,0-14.2,.33-19.58,.33-.65,0-.65-1.96,0-1.96,11.59,0,13.71-1.8,13.71-11.26V43.82c0-9.3-2.12-11.26-13.71-11.26-.65,0-.65-1.96,0-1.96,5.39,0,12.24,.49,19.58,.49,7.83,0,14.53-.49,19.75-.49,.49,0,.49,1.96,0,1.96-11.59,0-13.55,2.28-13.55,11.59V119.39c0,9.47,1.8,11.26,13.55,11.26Z"
                    fill="#7b0e26"
                  />
                </g>
                <g>
                  <path
                    d="M130.25,156.27c9.99-1.79,18.65-7.98,26.3-14.36,12.48-10.99,22.45-25.59,26.12-41.78,3.01-12.85,1.53-26.46-2.5-38.9-2.96-9.51-7.61-18.57-12.88-27.08-1.72-2.93-3.74-5.66-5.51-8.58l.38-.32c1.2,1.22,2.38,2.46,3.55,3.71,6.43,6.85,12.06,14.93,16.13,23.41,14.66,29.67,5.85,62.68-17.2,85.13-7.16,6.8-15.28,12.75-24.41,16.59-3.17,1.31-6.49,2.38-9.93,2.67l-.05-.5h0Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M174.21,22.86s6.72,3.12,6.15,11.89c-.57,8.77-4.34,10.81-4.34,10.81l-4.17-5.22s3.12-6.41,1.26-13.94c-.92-3.69,1.11-3.54,1.11-3.54Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M186.59,45.97s5.89,3.92,4.43,12.96-5.71,9.82-5.71,9.82l-2.76-4.87s3.57-6.33,2.64-14.34c-.46-3.92,1.4-3.56,1.4-3.56Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M195.84,82.85s3.05,5.98-1.83,11.2c-4.88,5.22-8.57,3.32-8.57,3.32l-.18-4.84s5.44-2.21,8-8.1c1.26-2.89,2.58-1.59,2.58-1.59Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M175.19,65.48s-3.49,6.28,1.83,13.61c5.32,7.34,9.44,6.01,9.44,6.01l.28-5.64s-5.99-3.93-8.72-11.48c-1.34-3.7-2.83-2.5-2.83-2.5Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M165.75,120.85s-5.77,1.8-6.13,8.84,3.15,8.45,3.15,8.45l3.25-3.11s-1.94-5.43,.3-11.24c1.1-2.85-.57-2.94-.57-2.94Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M178.2,98.62s-5.94,2.99-4.78,9.54c1.16,6.55,5.34,7.02,5.34,7.02l2.88-3.61s-3.33-4.53-2.16-10.38c.57-2.87-1.27-2.56-1.27-2.56Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M149.91,136.44s-6.02,.04-8.3,6.69,.71,9.03,.71,9.03l3.96-2.04s-.37-5.77,3.36-10.7c1.83-2.41,.26-2.98,.26-2.98Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M162.63,40.71s-1.07,8,6.79,12.26c7.86,4.26,11.37,.74,11.37,.74l-3.07-4.48s-5.99-1.75-11.43-7.62c-2.66-2.88-3.67-.9-3.67-.9Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M187.62,114.69s1.37,6.47-5.07,10.29-10.11,2.4-10.11,2.4l5.52-9.69s1.86,1.26,6.58-2.6c2.55-2.09,3.08-.4,3.08-.4Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M169.11,141.45c1.19-.31,2.16,.94,1.61,2.06-.97,1.96-3.48,5.52-9.32,6.45-8.19,1.31-10.09-2.3-10.09-2.3l5.32-5.06s4.54,2.53,11.14-.64c.52-.25,.96-.41,1.34-.51Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M167.58,32.51s-.35-5.95-5-11.41-11.12-6.6-12.65-5.97,2.88,9.08,5.79,11.65,8.42,5.81,11.86,5.73Z"
                    fill="#7b0e26"
                  />
                </g>
                <g>
                  <path
                    d="M66.48,156.77c-12.76-1.48-26.28-11.34-35.25-20.19C8.79,114.21,.5,81.53,14.93,52.38c4.07-8.47,9.7-16.56,16.13-23.41,1.17-1.25,2.36-2.49,3.55-3.71l.38,.32c-.91,1.45-1.84,2.88-2.77,4.3-2.79,4.21-5.44,8.57-7.78,13.04C7.15,75.14,7.63,107.07,33.03,134.86c6.81,7.41,14.84,13.9,23.94,18.27,3.03,1.46,6.22,2.67,9.56,3.15l-.05,.5h0Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M22.57,22.86s-6.72,3.12-6.15,11.89c.57,8.77,4.34,10.81,4.34,10.81l4.17-5.22s-3.12-6.41-1.26-13.94c.92-3.69-1.11-3.54-1.11-3.54Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M10.19,45.97s-5.89,3.92-4.43,12.96,5.71,9.82,5.71,9.82l2.76-4.87s-3.57-6.33-2.64-14.34c.46-3.92-1.4-3.56-1.4-3.56Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M.94,82.85s-3.05,5.98,1.83,11.2,8.57,3.32,8.57,3.32l.18-4.84s-5.44-2.21-8-8.1c-1.26-2.89-2.58-1.59-2.58-1.59Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M21.59,65.48s3.49,6.28-1.83,13.61c-5.32,7.34-9.44,6.01-9.44,6.01l-.28-5.64s5.99-3.93,8.72-11.48c1.34-3.7,2.83-2.5,2.83-2.5Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M31.03,120.85s5.77,1.8,6.13,8.84-3.15,8.45-3.15,8.45l-3.25-3.11s1.94-5.43-.3-11.24c-1.1-2.85,.57-2.94,.57-2.94Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M18.58,98.62s5.94,2.99,4.78,9.54c-1.16,6.55-5.34,7.02-5.34,7.02l-2.88-3.61s3.33-4.53,2.16-10.38c-.57-2.87,1.27-2.56,1.27-2.56Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M46.87,136.44s6.02,.04,8.3,6.69c2.28,6.65-.71,9.03-.71,9.03l-3.96-2.04s.37-5.77-3.36-10.7c-1.83-2.41-.26-2.98-.26-2.98Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M34.15,40.71s1.07,8-6.79,12.26c-7.86,4.26-11.37,.74-11.37,.74l3.07-4.48s5.99-1.75,11.43-7.62c2.66-2.88,3.67-.9,3.67-.9Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M9.16,114.69s-1.37,6.47,5.07,10.29,10.11,2.4,10.11,2.4l-5.52-9.69s-1.86,1.26-6.58-2.6c-2.55-2.09-3.08-.4-3.08-.4Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M27.67,141.45c-1.19-.31-2.16,.94-1.61,2.06,.97,1.96,3.48,5.52,9.32,6.45,8.19,1.31,10.09-2.3,10.09-2.3l-5.32-5.06s-4.54,2.53-11.14-.64c-.52-.25-.96-.41-1.34-.51Z"
                    fill="#7b0e26"
                  />
                  <path
                    d="M29.2,32.51s.35-5.95,5-11.41,11.12-6.6,12.65-5.97-2.88,9.08-5.79,11.65-8.42,5.81-11.86,5.73Z"
                    fill="#7b0e26"
                  />
                </g>
              </g>
            </g>
          </svg>
        </Link>
        <nav ref={desktopNavRef}>
          {menu.data.menuLink.map((el, index) => (
            <PrismicLink
              field={el.link}
              key={`${el + index}`}
              className={router.asPath == `/${el.link.uid}` ? "active" : ""}
            >
              {el.label}
              <div className="activeBox">
                <div className="activeIndi"></div>
              </div>
            </PrismicLink>
          ))}
        </nav>
        <div
          id="hamburgerBtn"
          onClick={burgerToggle}
          ref={animationContainer}
        ></div>
      </div>
      <div id="mobileNavMenu" ref={mobileNavRef}>
        <nav>
          {menu.data.menuLink.map((el, index) => (
            <PrismicLink
              field={el.link}
              key={el.link + el + index}
              className={router.asPath == `/${el.link.uid}` ? "active" : ""}
            >
              <div className="activeBox">
                <div className="activeIndi"></div>
              </div>
              <span
                key={el.link + el + index}
                onClick={burgerToggle}
                ref={addLinkRef}
              >
                <span className="lineTop"></span>

                <h1>{el.label}</h1>
              </span>
            </PrismicLink>
          ))}
        </nav>
      </div>
      <div id="transitionContainer" ref={transitionRef}>
        <div className="transitionCover"></div>
        <div className="transitionCover"></div>
      </div>
    </>
  );
};

export default Navbar;
