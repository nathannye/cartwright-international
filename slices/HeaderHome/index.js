import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function HeaderHome({ slice }) {
  const imageRef = useRef();
  const tl = useRef(null);
  const headerRef = useRef();
  const colorTL = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let outline = document.querySelector("svg > g#outlineText");
    let solid = document.querySelector("svg > g#solidText");
    solid.cw = solid.querySelector("text#cartwright");
    solid.intl = solid.querySelector("text#international");
    outline.cw = solid.querySelector("g#cartwright");
    outline.intl = outline.querySelector("g#international-2");
    let cartwright = document.querySelector("g#cw-solid, g#cartwright");
    let international = document.querySelector(
      "g#intl-solid, g#international-2"
    );
    gsap.set(imageRef.current, {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });
    gsap.set(solid.querySelectorAll("g"), {
      x: -20,
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });
    gsap.set(outline.querySelectorAll("g"), {
      x: -20,
      autoAlpha: 0,
    });

    tl.current = gsap
      .timeline({
        delay: 0.8,
      })
      .to(
        outline.querySelectorAll("g"),
        {
          stagger: -0.17,
          x: 0,
          autoAlpha: 1,
          duration: 1.1,
          ease: "power3.out",
        },
        0
      )
      .to(
        solid.querySelectorAll("g"),
        {
          stagger: 0.14,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
        },
        0
      )
      .to(
        solid.querySelectorAll("g"),
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          stagger: 0.14,
          duration: 1,
          ease: "power3.inOut",
        },
        0.06
      )
      .to(
        imageRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.3,
          ease: "power4.inOut",
        },
        0.2
      );

    return () => {
      tl.current.kill();
    };
  });

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    colorTL.current = gsap.timeline({
      scrollTrigger: {
        start: "bottom bottom",
        trigger: headerRef.current,
        onEnter: () => {
          document.body.classList.add("isLight");
        },
        onEnterBack: () => {
          document.body.classList.add("isLight");
        },
        onLeaveBack: () => {
          document.body.classList.remove("isLight");
        },
      },
    });
  });

  return (
    <header id="headerLarge" ref={headerRef}>
      <div id="companyNameContainer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.06 90.24">
          <g id="solidText">
            <g id="cw-solid">
              <text
                id="cartwright"
                transform="translate(0 39)"
                fill="#f7f5f3"
                fontFamily="CormorantGaramond-Medium, 'Cormorant Garamond'"
                fontSize="48"
              >
                <tspan x="0" y="0" letterSpacing="-.02em">
                  C
                </tspan>
                <tspan x="32.1" y="0" letterSpacing="0em">
                  A
                </tspan>
                <tspan x="65.87" y="0" letterSpacing="-.07em">
                  R
                </tspan>
                <tspan x="94.96" y="0" letterSpacing="0em">
                  T
                </tspan>
                <tspan x="125.57" y="0" letterSpacing="0em">
                  W
                </tspan>
                <tspan x="170.19" y="0" letterSpacing="0em">
                  R
                </tspan>
                <tspan x="202.92" y="0" letterSpacing="-.06em">
                  I
                </tspan>
                <tspan x="216.2" y="0" letterSpacing="-.04em">
                  G
                </tspan>
                <tspan x="248.71" y="0" letterSpacing="-.02em">
                  H
                </tspan>
                <tspan x="284.08" y="0" letterSpacing="-.02em">
                  T
                </tspan>
              </text>
            </g>
            <g id="intl-solid">
              <text
                id="international"
                transform="translate(41.11 76.66)"
                fill="#f7f5f3"
                fontFamily="CormorantGaramond-Medium, 'Cormorant Garamond'"
                fontSize="48"
              >
                <tspan x="0" y="0" letterSpacing="-.03em">
                  I
                </tspan>
                <tspan x="14.43" y="0" letterSpacing="-.03em">
                  N
                </tspan>
                <tspan x="48.16" y="0" letterSpacing="-.03em">
                  T
                </tspan>
                <tspan x="77.15" y="0" letterSpacing="-.04em">
                  E
                </tspan>
                <tspan x="101.01" y="0" letterSpacing="0em">
                  R
                </tspan>
                <tspan x="133.41" y="0" letterSpacing="-.04em">
                  N
                </tspan>
                <tspan x="166.41" y="0" letterSpacing="-.09em">
                  A
                </tspan>
                <tspan x="196.01" y="0" letterSpacing="-.03em">
                  T
                </tspan>
                <tspan x="224.94" y="0" letterSpacing="-.07em">
                  I
                </tspan>
                <tspan x="237.74" y="0" letterSpacing="-.06em">
                  O
                </tspan>
                <tspan x="271.61" y="0" letterSpacing="-.04em">
                  N
                </tspan>
                <tspan x="304.6" y="0" letterSpacing="0em">
                  A
                </tspan>
                <tspan x="338.15" y="0" letterSpacing="-.03em">
                  L
                </tspan>
              </text>
            </g>
          </g>
          <g id="outlineText">
            <g id="international-2">
              <path
                d="M52.64,47.06c-1.63,.37-2.09,1.35-2.09,3.58v22.13c0,2.24,.39,3.16,2.03,3.5h-.06c-1.03-.03-2.19-.06-3.45-.06-1.17,0-2.32,.03-3.33,.05h-.15c1.68-.33,2.11-1.27,2.11-3.5v-22.23c0-2.17-.43-3.12-2.04-3.48h.09c1.01,.04,2.16,.08,3.33,.08,1.28,0,2.46-.04,3.5-.08h.07m2.24-.41c-1.54,0-3.5,.14-5.81,.14-2.16,0-4.18-.14-5.76-.14-.19,0-.19,.58,0,.58,3.41,0,4.03,.58,4.03,3.31v22.23c0,2.78-.62,3.31-4.03,3.31-.19,0-.19,.58,0,.58,1.58,0,3.6-.1,5.76-.1,2.3,0,4.22,.1,5.81,.1,.14,0,.14-.58,0-.58-3.46,0-3.98-.53-3.98-3.31v-22.13c0-2.74,.58-3.41,3.98-3.41,.14,0,.14-.58,0-.58h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M64.03,47.01c.3,0,.38,.09,.81,.75,.26,.39,.6,.92,1.17,1.62l18.15,21.99,.62,.75v-20.03c0-2.93-.83-4.54-2.66-5.03,.16,0,.31,.02,.47,.02,.76,.04,1.56,.08,2.46,.08,.85,0,1.68-.04,2.48-.08,.19,0,.38-.02,.56-.03-1.89,.5-2.82,2.16-2.82,5.04v25h-.02l-22.33-26.74s-.05-.05-.08-.1l-.66-1.33v22.37c0,2.9,.89,4.52,2.77,5-.16,0-.32-.01-.48-.02-.73-.03-1.56-.05-2.47-.05s-1.75,.03-2.57,.05c-.21,0-.42,.01-.63,.02,1.98-.47,2.88-2.06,2.88-5v-22.28l-.11-.1c-1.03-1-2-1.61-3.01-1.87,.18,0,.37,.01,.55,.02,.59,.02,1.14,.05,1.64,.05,.84,0,1.63-.03,2.26-.06,.41-.02,.76-.03,1.01-.03m25.44-.35c-1.25,0-2.83,.14-4.42,.14-1.68,0-3.02-.14-4.32-.14-.14,0-.14,.58,0,.58,2.64,0,3.7,1.54,3.7,4.85v19.06l-18.15-21.99c-1.49-1.82-1.44-2.5-2.26-2.5-.62,0-1.87,.1-3.26,.1-1.01,0-2.3-.1-3.41-.1-.19,0-.19,.58,0,.58,1.2,0,2.45,.43,3.98,1.92v22.13c0,3.31-1.15,4.8-3.94,4.8-.14,0-.14,.58,0,.58,1.34,0,2.93-.1,4.61-.1s3.02,.1,4.27,.1c.19,0,.19-.58,0-.58-2.59,0-3.74-1.49-3.74-4.8v-20.88c.05,.1,.1,.14,.14,.19l22.37,26.79s.13,.05,.21,.05c.17,0,.36-.06,.36-.19v-25.15c0-3.31,1.2-4.85,3.84-4.85,.19,0,.19-.58,0-.58h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M117.62,45.96c-.15,1.86-.31,5.3-.36,7.3-.52-4.22-2.55-6.05-6.63-6.05-3.65,0-4.57,.34-4.57,3.42v22.13c0,2.23,.44,3.16,2.29,3.5-1.12-.03-2.38-.05-3.76-.05-1.29,0-2.55,.03-3.65,.05h-.05c1.74-.32,2.32-1.21,2.32-3.5v-22.23c0-3-.94-3.33-4.62-3.33s-5.89,1.74-6.98,5.93c.22-2.02,.47-5.19,.51-7.05,.31,.6,1.26,.9,2.81,.9h0c2.7,.09,6.04,.14,9.66,.14,2.59,0,4.41-.05,6.02-.09,1.17-.03,2.19-.06,3.25-.06,1.69,0,3.15-.08,3.78-1.04m.15-.69c-.13,0-.26,.06-.28,.18-.34,1.01-1.49,1.2-3.65,1.2-2.5,0-4.75,.14-9.26,.14-3.6,0-6.91-.05-9.65-.14-.91,0-2.59-.1-2.59-1.06,0-.16-.13-.23-.27-.23-.15,0-.3,.08-.3,.23,0,2.16-.43,7.2-.67,8.83,0,.08,.15,.13,.3,.13,.13,0,.25-.04,.28-.13,.96-4.85,2.93-6.86,6.91-6.86,3.6,0,4.27,.24,4.27,2.98v22.23c0,2.78-.72,3.31-4.61,3.31-.14,0-.14,.58,0,.58,1.78,0,3.94-.1,6.34-.1,2.54,0,4.66,.1,6.38,.1,.14,0,.14-.58,0-.58-3.98,0-4.56-.53-4.56-3.31v-22.13c0-2.74,.58-3.07,4.22-3.07,4.18,0,6.1,1.87,6.38,6.86,.02,.07,.17,.11,.31,.11s.27-.04,.27-.11c0-1.54,.24-7.01,.43-8.98,0-.12-.12-.18-.25-.18h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M139.8,47.01s.05,0,.07,0h0s0,.04,0,.09l.08,4.86c-.69-2.93-2.77-4.59-5.82-4.59h-2.64c-3.14,0-4.05,.76-4.05,3.37v10.14h5.87c2.82,0,4.35-.81,4.78-2.6,0,.5-.01,.91-.02,1.28-.01,.51-.02,.96-.02,1.49,0,.73,.02,1.41,.05,2.13,.01,.32,.02,.64,.03,.96-.46-2-2.02-2.92-4.91-2.92h-5.77v11.34c0,2.65,.83,3.37,3.85,3.37h3.41c3.22,0,5.6-1.98,6.63-5.48-.19,1.72-.31,3.87-.31,5.47,0,.31-.01,.37-.42,.37h-18.27c1.84-.3,2.29-1.22,2.29-3.54v-22.23c0-2.3-.48-3.23-2.33-3.54h17.49m0-.35h-19.49c-.14,0-.14,.58,0,.58,3.41,0,3.98,.58,3.98,3.31v22.23c0,2.78-.58,3.31-3.98,3.31-.14,0-.14,.58,0,.58h20.31c.58,0,.77-.19,.77-.72,0-2.02,.19-4.7,.43-6.43,0-.11-.18-.17-.34-.17-.12,0-.23,.04-.23,.12-.82,3.84-3.12,6.14-6.53,6.14h-3.41c-2.88,0-3.5-.62-3.5-3.02v-10.99h5.42c3.31,0,4.7,1.2,4.7,3.98,0,.07,.14,.11,.29,.11s.29-.04,.29-.11c0-1.68-.1-3.02-.1-4.51,0-1.2,.05-2.02,.05-3.98,0-.07-.14-.11-.29-.11s-.29,.04-.29,.11c0,2.4-1.34,3.46-4.56,3.46h-5.52v-9.79c0-2.35,.67-3.02,3.7-3.02h2.64c3.22,0,5.28,1.92,5.66,5.38,0,.1,.13,.14,.26,.14s.26-.05,.26-.14l-.1-6c0-.29-.1-.43-.43-.43h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M156.75,46.86c4.86,0,7.76,2.22,7.76,5.94,0,3.21-2.04,6.16-5.32,7.7l-.37,.18,.23,.34c7.23,10.47,11.11,14.56,14.77,15.29h-5.32c-1.07,0-4.75-3.86-11.85-14.68l-.13-.19-.23,.04c-.83,.16-1.61,.23-2.34,.23-.47,0-1.09-.05-1.64-.1-.21-.02-.41-.03-.6-.05l-.37-.03v11.22c0,2.24,.39,3.16,2.03,3.5h-.06c-1.01-.03-2.16-.06-3.39-.06-1.17,0-2.32,.03-3.33,.05h-.15c1.68-.33,2.11-1.27,2.11-3.5v-22.23c0-2.17-.42-3.12-2-3.48h.05c1,.04,2.14,.08,3.32,.08,1.03,0,2.29-.07,3.51-.15,1.22-.07,2.37-.14,3.31-.14m-2.21,14.4c4.86,0,7.02-2.15,7.02-6.98s-2.06-7.36-6.49-7.36c-2.41,0-3.71,.59-3.71,3.71v10.44l.31,.03c.86,.09,1.96,.15,2.87,.15m2.21-14.75c-1.92,0-4.8,.29-6.82,.29-2.16,0-4.13-.14-5.66-.14-.19,0-.19,.58,0,.58,3.36,0,3.94,.58,3.94,3.31v22.23c0,2.78-.62,3.31-4.03,3.31-.14,0-.14,.58,0,.58,1.58,0,3.6-.1,5.76-.1s4.18,.1,5.76,.1c.19,0,.19-.58,0-.58-3.46,0-3.98-.53-3.98-3.31v-10.85c.67,.05,1.58,.14,2.26,.14,.82,0,1.63-.1,2.4-.24,6.05,9.22,10.56,14.83,12.15,14.83h6.58c.19,0,.19-.58,0-.58-4.03,0-7.92-3.94-15.75-15.27,3.26-1.54,5.52-4.51,5.52-8.02,0-3.79-2.88-6.29-8.11-6.29h0Zm-2.21,14.4c-.82,0-1.92-.05-2.83-.14v-10.13c0-2.74,.96-3.36,3.36-3.36,3.74,0,6.14,1.68,6.14,7.01,0,4.42-1.78,6.62-6.67,6.62h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M183.01,47.01c.3,0,.38,.09,.81,.75,.26,.39,.6,.92,1.17,1.62l18.15,21.99,.62,.75v-20.03c0-2.93-.83-4.54-2.66-5.03,.16,0,.31,.02,.47,.02,.76,.04,1.56,.08,2.46,.08,.85,0,1.68-.04,2.48-.08,.19,0,.38-.02,.56-.03-1.89,.5-2.82,2.16-2.82,5.04v25h-.02l-22.33-26.74s-.05-.05-.08-.1l-.66-1.33v22.37c0,2.9,.89,4.52,2.77,5-.16,0-.32-.01-.48-.02-.73-.03-1.56-.05-2.47-.05s-1.75,.03-2.57,.05c-.21,0-.42,.01-.63,.02,1.98-.47,2.88-2.06,2.88-5v-22.28l-.11-.1c-1.03-1-2-1.61-3.01-1.87,.18,0,.37,.01,.55,.02,.59,.02,1.14,.05,1.64,.05,.84,0,1.63-.03,2.26-.06,.41-.02,.76-.03,1.01-.03m25.44-.35c-1.25,0-2.83,.14-4.42,.14-1.68,0-3.02-.14-4.32-.14-.14,0-.14,.58,0,.58,2.64,0,3.7,1.54,3.7,4.85v19.06l-18.15-21.99c-1.49-1.82-1.44-2.5-2.26-2.5-.62,0-1.87,.1-3.26,.1-1.01,0-2.3-.1-3.41-.1-.19,0-.19,.58,0,.58,1.2,0,2.45,.43,3.98,1.92v22.13c0,3.31-1.15,4.8-3.94,4.8-.14,0-.14,.58,0,.58,1.34,0,2.93-.1,4.61-.1s3.02,.1,4.27,.1c.19,0,.19-.58,0-.58-2.59,0-3.74-1.49-3.74-4.8v-20.88c.05,.1,.1,.14,.14,.19l22.37,26.79s.13,.05,.21,.05c.17,0,.36-.06,.36-.19v-25.15c0-3.31,1.2-4.85,3.84-4.85,.19,0,.19-.58,0-.58h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M224,46.48s.06,0,.07,0l11.39,23.74c1.82,3.92,3.05,5.6,4.66,6.06-.57-.02-1.16-.05-1.73-.08-.95-.05-1.93-.1-2.85-.1-1.07,0-1.93,.05-2.75,.1h-.23c.58-.14,.96-.38,1.18-.74,.41-.65,.27-1.59-.47-3.15l-4.13-8.64-.1-.2h-11.92l-.09,.21-2.83,6.58c-.81,1.96-.87,3.48-.18,4.52,.48,.72,1.28,1.19,2.43,1.44-.12,0-.23-.01-.35-.02-.93-.05-1.9-.11-3.21-.11-1.23,0-2.09,.05-2.93,.1-.33,.02-.66,.04-1,.06,1.91-.48,3.13-2.13,4.87-6.15l10.1-23.64s.04,0,.07,0m-6.75,16.71h11.65l-.24-.5-5.57-11.62-.33-.69-.3,.71-4.99,11.62-.21,.49m6.75-17.06c-.16,0-.31,.05-.36,.14l-10.13,23.71c-2.11,4.9-3.41,6.1-6,6.1-.29,0-.29,.58,0,.58,2.02,0,3.02-.19,5.38-.19s3.74,.19,5.66,.19c.29,0,.29-.58,0-.58-4.08,0-5.66-1.73-4.03-5.67l2.83-6.58h11.47l4.13,8.64c1.34,2.83,.72,3.6-2.54,3.6-.29,0-.29,.58,0,.58,1.82,0,3.07-.19,5.14-.19,1.82,0,3.84,.19,5.66,.19,.24,0,.24-.58,0-.58-1.97,0-3.22-1.25-5.42-6l-11.42-23.81c-.05-.1-.2-.14-.36-.14h0Zm-6.22,16.71l4.99-11.62,5.57,11.62h-10.56Z"
                fill="#f7f5f3"
              />
              <path
                d="M265.47,45.96c-.15,1.86-.31,5.3-.36,7.31-.52-4.23-2.55-6.05-6.63-6.05-3.65,0-4.57,.34-4.57,3.42v22.13c0,2.23,.44,3.16,2.29,3.5-1.12-.03-2.38-.05-3.76-.05-1.29,0-2.55,.03-3.65,.05h-.05c1.74-.32,2.32-1.21,2.32-3.5v-22.23c0-3-.94-3.33-4.62-3.33s-5.89,1.74-6.98,5.94c.22-2.02,.47-5.19,.51-7.05,.31,.6,1.26,.9,2.81,.9h0c2.7,.09,6.04,.14,9.66,.14,2.59,0,4.41-.05,6.02-.09,1.17-.03,2.19-.06,3.25-.06,1.69,0,3.15-.08,3.78-1.04m.15-.69c-.13,0-.26,.06-.28,.18-.34,1.01-1.49,1.2-3.65,1.2-2.5,0-4.75,.14-9.26,.14-3.6,0-6.91-.05-9.65-.14-.91,0-2.59-.1-2.59-1.06,0-.16-.13-.23-.27-.23-.15,0-.3,.08-.3,.23,0,2.16-.43,7.2-.67,8.83,0,.08,.15,.13,.3,.13,.13,0,.25-.04,.28-.13,.96-4.85,2.93-6.86,6.91-6.86,3.6,0,4.27,.24,4.27,2.98v22.23c0,2.78-.72,3.31-4.61,3.31-.14,0-.14,.58,0,.58,1.78,0,3.94-.1,6.34-.1,2.54,0,4.66,.1,6.38,.1,.14,0,.14-.58,0-.58-3.98,0-4.56-.53-4.56-3.31v-22.13c0-2.74,.58-3.07,4.22-3.07,4.18,0,6.1,1.87,6.38,6.86,.02,.07,.17,.11,.31,.11s.27-.04,.27-.11c0-1.54,.24-7.01,.43-8.98,0-.12-.12-.18-.25-.18h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M277.58,47.06c-1.63,.37-2.09,1.35-2.09,3.58v22.13c0,2.24,.39,3.16,2.03,3.5h-.06c-1.03-.03-2.19-.06-3.45-.06-1.17,0-2.32,.03-3.33,.05h-.15c1.68-.33,2.1-1.27,2.1-3.5v-22.23c0-2.17-.43-3.12-2.04-3.48h.09c1.01,.04,2.16,.08,3.33,.08,1.27,0,2.46-.04,3.5-.08h.07m2.24-.41c-1.54,0-3.5,.14-5.81,.14-2.16,0-4.18-.14-5.76-.14-.19,0-.19,.58,0,.58,3.41,0,4.03,.58,4.03,3.31v22.23c0,2.78-.62,3.31-4.03,3.31-.19,0-.19,.58,0,.58,1.58,0,3.6-.1,5.76-.1,2.3,0,4.22,.1,5.81,.1,.14,0,.14-.58,0-.58-3.46,0-3.98-.53-3.98-3.31v-22.13c0-2.74,.58-3.41,3.98-3.41,.14,0,.14-.58,0-.58h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M298.09,46.48c9.63,0,14.82,7.66,14.82,14.87,0,8.57-7.4,15.54-16.5,15.54-8.61,0-14.87-6.39-14.87-15.2,0-9.87,8.53-15.2,16.55-15.2m0,30.05c6.98,0,11.49-5.43,11.49-13.84,0-9.43-5.41-15.76-13.46-15.76-7.04,0-11.25,4.89-11.25,13.07,0,9.58,5.56,16.53,13.22,16.53m0-30.4c-7.78,0-16.9,5.14-16.9,15.55,0,8.45,6,15.55,15.22,15.55s16.85-6.96,16.85-15.89c0-7.73-5.71-15.22-15.17-15.22h0Zm0,30.05c-7.63,0-12.87-7.06-12.87-16.18,0-7.87,3.98-12.72,10.9-12.72,7.97,0,13.11,6.43,13.11,15.41s-4.9,13.49-11.14,13.49h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M321.21,47.01c.3,0,.38,.09,.81,.75,.26,.39,.6,.92,1.17,1.62l18.15,21.99,.62,.75v-20.03c0-2.93-.83-4.54-2.66-5.03,.16,0,.31,.02,.47,.02,.76,.04,1.56,.08,2.46,.08,.85,0,1.68-.04,2.48-.08,.19,0,.38-.02,.56-.03-1.89,.5-2.82,2.16-2.82,5.04v25h-.02l-22.33-26.74s-.06-.06-.08-.1l-.66-1.33v22.37c0,2.9,.89,4.52,2.77,5-.16,0-.32-.01-.48-.02-.73-.03-1.56-.05-2.47-.05s-1.75,.03-2.57,.05c-.21,0-.42,.01-.63,.02,1.98-.47,2.88-2.06,2.88-5v-22.28l-.11-.1c-1.03-1-2-1.61-3.01-1.87,.18,0,.37,.01,.55,.02,.59,.02,1.14,.05,1.64,.05,.84,0,1.63-.03,2.26-.06,.41-.02,.76-.03,1.01-.03m25.44-.35c-1.25,0-2.83,.14-4.42,.14-1.68,0-3.02-.14-4.32-.14-.14,0-.14,.58,0,.58,2.64,0,3.7,1.54,3.7,4.85v19.06l-18.15-21.99c-1.49-1.82-1.44-2.5-2.26-2.5-.62,0-1.87,.1-3.26,.1-1.01,0-2.3-.1-3.41-.1-.19,0-.19,.58,0,.58,1.2,0,2.45,.43,3.98,1.92v22.13c0,3.31-1.15,4.8-3.94,4.8-.14,0-.14,.58,0,.58,1.34,0,2.93-.1,4.61-.1s3.02,.1,4.27,.1c.19,0,.19-.58,0-.58-2.59,0-3.74-1.49-3.74-4.8v-20.88c.05,.1,.1,.14,.14,.19l22.37,26.79s.13,.05,.21,.05c.17,0,.36-.06,.36-.19v-25.15c0-3.31,1.2-4.85,3.84-4.85,.19,0,.19-.58,0-.58h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M362.2,46.48s.06,0,.07,0l11.39,23.74c1.82,3.92,3.05,5.6,4.66,6.06-.57-.02-1.16-.05-1.73-.08-.95-.05-1.93-.1-2.85-.1-1.07,0-1.93,.05-2.75,.1h-.23c.58-.14,.95-.38,1.18-.74,.41-.65,.27-1.59-.47-3.15l-4.13-8.64-.1-.2h-11.92l-.09,.21-2.83,6.58c-.81,1.96-.87,3.48-.18,4.52,.48,.72,1.28,1.19,2.43,1.44-.12,0-.23-.01-.35-.02-.93-.05-1.9-.11-3.21-.11-1.23,0-2.09,.05-2.93,.1-.33,.02-.66,.04-1,.06,1.91-.48,3.13-2.13,4.87-6.15l10.1-23.64s.04,0,.07,0m-6.75,16.71h11.65l-.24-.5-5.57-11.62-.33-.69-.3,.71-4.99,11.62-.21,.49m6.75-17.06c-.16,0-.31,.05-.36,.14l-10.13,23.71c-2.11,4.9-3.41,6.1-6,6.1-.29,0-.29,.58,0,.58,2.02,0,3.02-.19,5.38-.19s3.75,.19,5.67,.19c.29,0,.29-.58,0-.58-4.08,0-5.67-1.73-4.03-5.67l2.83-6.58h11.47l4.13,8.64c1.34,2.83,.72,3.6-2.54,3.6-.29,0-.29,.58,0,.58,1.82,0,3.07-.19,5.14-.19,1.82,0,3.84,.19,5.67,.19,.24,0,.24-.58,0-.58-1.97,0-3.22-1.25-5.42-6l-11.42-23.81c-.05-.1-.2-.14-.36-.14h0Zm-6.22,16.71l4.99-11.62,5.57,11.62h-10.56Z"
                fill="#f7f5f3"
              />
              <path
                d="M383.2,47.07h.05c1.02,.04,2.17,.08,3.35,.08,1.24,0,2.41-.04,3.44-.08h.02c-1.6,.36-2.03,1.33-2.03,3.52v21.99c0,2.81,.67,3.37,4,3.37h4.61c3.56,0,6.13-2.04,7.21-5.66-.14,1.52-.31,3.78-.31,5.64,0,.35,0,.37-.37,.37h-20.23c1.84-.3,2.29-1.22,2.29-3.54v-22.23c0-2.17-.43-3.12-2.02-3.48m9.16-.41c-1.54,0-3.5,.14-5.76,.14s-4.18-.14-5.71-.14c-.14,0-.14,.58,0,.58,3.41,0,3.98,.58,3.98,3.31v22.23c0,2.78-.58,3.31-3.98,3.31-.14,0-.14,.58,0,.58h22.27c.58,0,.72-.19,.72-.72,0-2.16,.24-4.99,.43-6.82,0-.11-.17-.17-.31-.17-.11,0-.22,.04-.22,.12-.77,3.94-3.22,6.53-7.15,6.53h-4.61c-3.12,0-3.65-.43-3.65-3.02v-21.99c0-2.74,.58-3.36,3.98-3.36,.14,0,.14-.58,0-.58h0Z"
                fill="#f7f5f3"
              />
            </g>
            <g id="carwright">
              <path
                d="M19.87,8.93c3.73,0,6.32,.51,8.93,1.74,.33,.18,.33,.18,.38,.87l.61,5.71c-1.61-5.41-5.05-8.15-10.2-8.15-8.05,0-13.45,5.95-13.45,14.8s6.01,15.37,13.69,15.37c5.05,0,8.32-2.46,10.28-7.76l-.45,5.07c-.09,.69-.1,.7-.4,.87-3.16,1.47-5.82,2.04-9.47,2.04-10.08,0-17.13-6.35-17.13-15.45s7.08-15.11,17.22-15.11m0-.3C9.79,8.63,2.35,14.83,2.35,24.04s7.25,15.75,17.43,15.75c3.6,0,6.29-.53,9.6-2.06,.43-.24,.48-.34,.58-1.1l.48-5.38c0-.09-.17-.16-.32-.16-.1,0-.19,.03-.21,.11-1.87,5.23-4.94,7.78-10.08,7.78-7.39,0-13.39-6.48-13.39-15.07s5.33-14.5,13.15-14.5c5.18,0,8.4,2.78,9.94,8.02,.02,.1,.13,.14,.24,.14,.16,0,.34-.08,.34-.19l-.62-5.86c-.05-.77-.1-.86-.53-1.1-2.64-1.25-5.23-1.78-9.07-1.78h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M48.59,8.93s.09,0,.11,.01l11.4,23.77c2.02,4.35,3.31,5.92,5.19,6.15-.76-.01-1.55-.05-2.31-.09-.95-.05-1.93-.1-2.85-.1-1.07,0-1.93,.05-2.75,.1-.37,.02-.73,.04-1.11,.06,1.09-.11,1.7-.38,2.01-.88,.4-.63,.26-1.56-.47-3.1l-4.13-8.64-.08-.17h-11.86l-.08,.18-2.83,6.58c-.81,1.94-.87,3.45-.18,4.48,.6,.89,1.75,1.42,3.45,1.56-.48-.02-.94-.04-1.42-.07-.93-.05-1.9-.11-3.2-.11-1.23,0-2.09,.05-2.92,.1-.57,.03-1.12,.07-1.76,.08,2.34-.23,3.64-1.74,5.58-6.25l10.11-23.66s.06-.01,.11-.01m-6.67,16.71h11.49l-.21-.43-5.57-11.62-.29-.6-.26,.61-4.99,11.62-.18,.42m6.67-17.01c-.16,0-.31,.05-.36,.14l-10.13,23.71c-2.11,4.9-3.41,6.1-6,6.1-.29,0-.29,.58,0,.58,2.02,0,3.02-.19,5.38-.19s3.74,.19,5.66,.19c.29,0,.29-.58,0-.58-4.08,0-5.66-1.73-4.03-5.66l2.83-6.58h11.47l4.13,8.64c1.34,2.83,.72,3.6-2.54,3.6-.29,0-.29,.58,0,.58,1.82,0,3.07-.19,5.14-.19,1.82,0,3.84,.19,5.66,.19,.24,0,.24-.58,0-.58-1.97,0-3.22-1.25-5.42-6l-11.42-23.81c-.05-.1-.2-.14-.36-.14h0Zm-6.22,16.71l4.99-11.62,5.57,11.62h-10.56Z"
                fill="#f7f5f3"
              />
              <path
                d="M80.51,9.32c4.89,0,7.81,2.24,7.81,5.99,0,3.22-2.05,6.19-5.35,7.75l-.32,.15,.2,.29c7.68,11.12,11.57,15.04,15.44,15.37h-6.02c-.53,0-2.94-1.06-11.89-14.7l-.11-.17-.2,.04c-.83,.16-1.62,.24-2.35,.24-.48,0-1.09-.05-1.64-.1-.21-.02-.41-.03-.6-.05l-.32-.02v11.17c0,2.58,.53,3.39,2.95,3.57-.33,0-.68-.02-1.03-.02-1.01-.03-2.16-.05-3.39-.05-1.17,0-2.32,.03-3.33,.05-.39,0-.77,.02-1.13,.03,2.46-.18,3.03-1,3.03-3.57V13.05c0-2.5-.53-3.35-2.79-3.56,.29,0,.59,.02,.9,.03,1,.04,2.14,.08,3.32,.08,1.03,0,2.29-.07,3.51-.15,1.22-.07,2.37-.14,3.31-.14m-2.21,14.4c4.82,0,6.97-2.14,6.97-6.92s-2.05-7.31-6.44-7.31c-2.37,0-3.66,.58-3.66,3.66v10.4l.27,.03c.86,.09,1.95,.15,2.86,.15m2.21-14.7c-1.92,0-4.8,.29-6.82,.29-2.16,0-4.13-.14-5.66-.14-.19,0-.19,.58,0,.58,3.36,0,3.94,.58,3.94,3.31v22.23c0,2.78-.62,3.31-4.03,3.31-.14,0-.14,.58,0,.58,1.58,0,3.6-.1,5.76-.1s4.18,.1,5.76,.1c.19,0,.19-.58,0-.58-3.46,0-3.98-.53-3.98-3.31v-10.85c.67,.05,1.58,.14,2.26,.14,.82,0,1.63-.1,2.4-.24,6.05,9.22,10.56,14.83,12.15,14.83h6.58c.19,0,.19-.58,0-.58-4.03,0-7.92-3.94-15.75-15.27,3.26-1.54,5.52-4.51,5.52-8.02,0-3.79-2.88-6.29-8.11-6.29h0Zm-2.21,14.4c-.82,0-1.92-.05-2.83-.14V13.15c0-2.74,.96-3.36,3.36-3.36,3.74,0,6.14,1.68,6.14,7.01,0,4.42-1.78,6.62-6.67,6.62h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M123.38,8.25c-.18,2.06-.38,6.59-.4,8.35-.36-4.84-2.3-6.83-6.66-6.83-3.61,0-4.52,.33-4.52,3.37v22.13c0,2.59,.56,3.39,3.26,3.57-.32,0-.64-.01-.98-.02-1.13-.03-2.41-.06-3.81-.06-1.29,0-2.49,.03-3.65,.05-.38,0-.75,.02-1.11,.02,2.54-.17,3.33-.92,3.33-3.57V13.05c0-2.97-.87-3.28-4.57-3.28-4.02,0-6.1,1.96-7.13,6.72,.24-1.95,.58-6.08,.61-8.16,.16,.75,1.12,1.13,2.86,1.13h0c2.7,.09,6.04,.14,9.66,.14,2.59,0,4.41-.05,6.02-.09,1.17-.03,2.19-.06,3.25-.06,1.78,0,3.3-.09,3.85-1.21m.08-.47c-.13,0-.26,.06-.28,.18-.34,1.01-1.49,1.2-3.65,1.2-2.5,0-4.75,.14-9.26,.14-3.6,0-6.91-.05-9.65-.14-.91,0-2.59-.1-2.59-1.06,0-.16-.13-.23-.27-.23-.15,0-.3,.08-.3,.23,0,2.16-.43,7.2-.67,8.83,0,.08,.15,.13,.3,.13,.13,0,.25-.04,.28-.13,.96-4.85,2.93-6.86,6.91-6.86,3.6,0,4.27,.24,4.27,2.98v22.23c0,2.78-.72,3.31-4.61,3.31-.14,0-.14,.58,0,.58,1.78,0,3.94-.1,6.34-.1,2.54,0,4.66,.1,6.38,.1,.14,0,.14-.58,0-.58-3.98,0-4.56-.53-4.56-3.31V13.15c0-2.74,.58-3.07,4.22-3.07,4.18,0,6.1,1.87,6.38,6.86,.02,.07,.17,.11,.31,.11s.27-.04,.27-.11c0-1.54,.24-7.01,.43-8.98,0-.12-.12-.18-.25-.18h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M169.65,9.47c-2.11,.22-3.66,1.63-4.71,4.29l-9.97,25.2s-.13,.04-.25,.04c-.15,0-.25-.03-.29-.05l-6.22-13.45-.29-.64-.26,.65-5.31,13.44s-.13,.04-.25,.04c-.15,0-.25-.03-.29-.05l-11.93-25.93c-1.03-2.21-1.85-3.33-3.63-3.54,.32,.01,.63,.03,.95,.05,.63,.04,1.35,.08,2.26,.08,1.77,0,3.06-.05,4.09-.09,.31-.01,.61-.02,.89-.03-.96,.1-1.52,.36-1.82,.83-.4,.63-.27,1.54,.4,2.96l9.94,21.31,.29,.63,.26-.64,4.08-10.22,.05-.12-.05-.12-5.14-11.09c-.88-1.96-1.84-3.33-3.55-3.55,.36,.01,.71,.03,1.08,.06,.63,.04,1.28,.08,2.1,.08,1.43,0,2.39-.05,3.17-.09,.14,0,.27-.01,.4-.02-.4,.06-.68,.2-.85,.46-.35,.55-.05,1.43,.8,3.32l3.26,7.01,.29,.63,.26-.65,2.59-6.53c.72-1.77,.83-2.87,.37-3.55-.25-.37-.66-.6-1.25-.7,.11,0,.22,.02,.33,.03,.46,.04,1.02,.09,2.15,.09,.9,0,1.55-.04,2.18-.08,.42-.02,.83-.05,1.29-.06-2.04,.22-3.49,1.6-4.52,4.28l-3.07,7.63-.05,.12,.06,.12,6.1,12.96,.29,.63,.26-.64,8.21-20.69c.55-1.43,.56-2.49,.04-3.25-.45-.66-1.28-1.04-2.51-1.15,.39,.01,.78,.03,1.18,.05,.81,.04,1.73,.08,2.94,.08,.95,0,1.62-.04,2.28-.08,.45-.03,.88-.05,1.38-.06m.61-.31c-1.63,0-2.45,.14-4.27,.14-2.21,0-3.41-.14-4.99-.14-.19,0-.19,.58,0,.58,3.22,0,4.08,1.39,3.07,4.03l-8.21,20.69-6.1-12.96,3.07-7.63c1.2-3.12,2.83-4.13,4.85-4.13,.14,0,.14-.58,0-.58-1.54,0-2.35,.14-4.08,.14-1.92,0-2.16-.14-3.17-.14-.14,0-.14,.58,0,.58,2.06,0,2.4,1.15,1.3,3.89l-2.59,6.53-3.26-7.01c-1.34-2.98-1.3-3.41,.67-3.41,.19,0,.19-.58,0-.58-1.01,0-2.11,.14-4.46,.14-1.54,0-2.5-.14-3.7-.14-.19,0-.19,.58,0,.58,1.73,0,2.74,1.06,3.79,3.41l5.14,11.09-4.08,10.22-9.94-21.31c-1.3-2.74-.43-3.41,2.11-3.41,.19,0,.19-.58,0-.58-1.39,0-2.98,.14-5.95,.14-1.68,0-2.64-.14-3.89-.14-.19,0-.19,.58,0,.58,1.97,0,2.83,.82,4.03,3.41l11.95,25.97c.07,.12,.31,.18,.55,.18s.46-.06,.51-.18l5.33-13.49,6.24,13.49c.07,.12,.31,.18,.55,.18s.46-.06,.51-.18l9.98-25.25c1.2-3.02,2.98-4.13,5.04-4.13,.19,0,.19-.58,0-.58h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M184.83,9.32c4.89,0,7.81,2.24,7.81,5.99,0,3.22-2.05,6.19-5.35,7.75l-.32,.15,.2,.29c7.68,11.12,11.57,15.04,15.44,15.37h-6.02c-.53,0-2.94-1.06-11.89-14.7l-.11-.17-.2,.04c-.83,.16-1.62,.24-2.35,.24-.48,0-1.09-.05-1.64-.1-.21-.02-.41-.03-.59-.05l-.32-.02v11.17c0,2.58,.53,3.39,2.95,3.57-.33,0-.68-.02-1.03-.02-1.01-.03-2.16-.05-3.39-.05-1.17,0-2.32,.03-3.33,.05-.39,0-.77,.02-1.13,.03,2.46-.18,3.03-1,3.03-3.57V13.05c0-2.5-.53-3.35-2.79-3.56,.29,0,.59,.02,.9,.03,1,.04,2.14,.08,3.32,.08,1.03,0,2.29-.07,3.51-.15,1.22-.07,2.37-.14,3.31-.14m-2.21,14.4c4.82,0,6.97-2.14,6.97-6.92s-2.05-7.31-6.44-7.31c-2.37,0-3.66,.58-3.66,3.66v10.4l.27,.03c.86,.09,1.95,.15,2.86,.15m2.21-14.7c-1.92,0-4.8,.29-6.82,.29-2.16,0-4.13-.14-5.66-.14-.19,0-.19,.58,0,.58,3.36,0,3.94,.58,3.94,3.31v22.23c0,2.78-.62,3.31-4.03,3.31-.14,0-.14,.58,0,.58,1.58,0,3.6-.1,5.76-.1s4.18,.1,5.76,.1c.19,0,.19-.58,0-.58-3.46,0-3.98-.53-3.98-3.31v-10.85c.67,.05,1.58,.14,2.26,.14,.82,0,1.63-.1,2.4-.24,6.05,9.22,10.56,14.83,12.15,14.83h6.58c.19,0,.19-.58,0-.58-4.03,0-7.92-3.94-15.75-15.27,3.26-1.54,5.52-4.51,5.52-8.02,0-3.79-2.88-6.29-8.11-6.29h0Zm-2.21,14.4c-.82,0-1.92-.05-2.83-.14V13.15c0-2.74,.96-3.36,3.36-3.36,3.74,0,6.14,1.68,6.14,7.01,0,4.42-1.78,6.62-6.67,6.62h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M206.54,9.49c.33,.01,.67,.02,1.01,.04,1.01,.04,2.16,.08,3.33,.08,1.27,0,2.45-.04,3.5-.08,.32-.01,.62-.02,.92-.03-2.31,.21-2.89,1.09-2.89,3.66v22.13c0,2.58,.53,3.39,2.95,3.57-.33,0-.67-.02-1.02-.02-1.02-.03-2.19-.05-3.45-.05-1.17,0-2.32,.03-3.33,.05-.39,0-.77,.02-1.13,.03,2.46-.18,3.03-1,3.03-3.57V13.05c0-2.49-.58-3.36-2.91-3.56m10.15-.33c-1.54,0-3.5,.14-5.81,.14-2.16,0-4.18-.14-5.76-.14-.19,0-.19,.58,0,.58,3.41,0,4.03,.58,4.03,3.31v22.23c0,2.78-.62,3.31-4.03,3.31-.19,0-.19,.58,0,.58,1.58,0,3.6-.1,5.76-.1,2.3,0,4.22,.1,5.81,.1,.14,0,.14-.58,0-.58-3.46,0-3.98-.53-3.98-3.31V13.15c0-2.74,.58-3.41,3.98-3.41,.14,0,.14-.58,0-.58h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M236.7,8.93c3.34,0,6.44,.65,8.32,1.75q.36,.16,.4,.82l.61,5.67h-.01c-.93-3.05-3.5-8.02-10.43-8.02-7.81,0-13.26,5.83-13.26,14.17,0,7.7,4.65,16,14.84,16,4.62,0,6.25-1.61,6.25-6.16s-.38-5.42-5.45-5.42h-.14s-.03-.12-.02-.18c2.25,.15,4.2,.23,6.13,.23,1.48,0,2.98-.04,4.71-.13,0,.02,0,.04,0,.07-.05,0-.09,0-.14,0-1.02,0-1.73,.19-2.08,1.16-.3,.82-.35,2.19-.35,4.75,0,2.19,.15,3.02,.26,3.57,.05,.26,.08,.43,.08,.65,0,.13-.01,.16-.01,.17-.03,.03-.21,.09-.28,.12-3.82,.83-7.45,1.29-10.21,1.29-10.05,0-17.08-6.33-17.08-15.4s7.34-15.11,17.85-15.11m0-.3c-10.27,0-18.15,5.95-18.15,15.41,0,8.54,6.38,15.7,17.38,15.7,3.17,0,6.96-.58,10.27-1.3,.43-.14,.53-.19,.53-.58,0-.77-.34-1.01-.34-4.22,0-4.91,.18-5.62,2.13-5.62,.07,0,.14,0,.22,0,.34,0,.24-.67,0-.67-1.68,.09-3.23,.13-4.8,.13-1.93,0-3.89-.07-6.19-.23-.34,0-.34,.77,.05,.77,4.99,0,5.33,.53,5.33,5.14s-1.54,5.86-5.95,5.86c-9.6,0-14.54-7.63-14.54-15.7,0-8.59,5.66-13.87,12.96-13.87,5.9,0,8.93,3.7,10.18,7.92,.04,.07,.13,.1,.23,.1,.16,0,.35-.08,.35-.2l-.62-5.81q-.05-.82-.58-1.06c-1.97-1.15-5.14-1.78-8.45-1.78h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M260.74,9.49c-2.42,.21-3.07,1.11-3.07,3.66v10.19h18.51V13.15c0-2.55-.6-3.44-2.98-3.65,.24,0,.5,.02,.76,.03,1.08,.04,2.29,.09,3.7,.09,1.18,0,2.36-.04,3.4-.08,.32-.01,.63-.02,.93-.03-2.36,.21-2.95,1.07-2.95,3.56v22.23c0,2.56,.58,3.39,3.08,3.57-.34,0-.7-.02-1.07-.02-1.04-.03-2.22-.05-3.4-.05-1.4,0-2.62,.03-3.69,.06-.28,0-.56,.01-.82,.02,2.49-.18,3.04-1,3.04-3.57v-11.49h-18.51v11.49c0,2.58,.56,3.39,3.07,3.57-.32,0-.64-.01-.98-.02-1.06-.03-2.26-.06-3.61-.06-1.17,0-2.33,.03-3.35,.05-.38,0-.76,.02-1.11,.03,2.5-.18,3.09-1.01,3.09-3.57V13.05c0-2.49-.59-3.35-2.94-3.56,.32,.01,.65,.02,.99,.04,1.01,.04,2.16,.08,3.33,.08,1.36,0,2.58-.04,3.66-.08,.33-.01,.64-.02,.93-.03m22.73-.33c-1.54,0-3.65,.14-5.81,.14-2.5,0-4.42-.14-5.95-.14-.19,0-.19,.58,0,.58,3.6,0,4.18,.67,4.18,3.41v9.89h-17.91V13.15c0-2.74,.62-3.41,4.18-3.41,.14,0,.14-.58,0-.58-1.58,0-3.55,.14-6,.14-2.16,0-4.18-.14-5.76-.14-.14,0-.14,.58,0,.58,3.46,0,4.08,.58,4.08,3.31v22.23c0,2.78-.62,3.31-4.13,3.31-.14,0-.14,.58,0,.58,1.58,0,3.65-.1,5.81-.1,2.45,0,4.37,.1,6,.1,.14,0,.14-.58,0-.58-3.6,0-4.18-.53-4.18-3.31v-11.19h17.91v11.19c0,2.78-.58,3.31-4.18,3.31-.19,0-.19,.58,0,.58,1.54,0,3.46-.1,5.95-.1,2.16,0,4.27,.1,5.81,.1,.19,0,.19-.58,0-.58-3.5,0-4.13-.53-4.13-3.31V13.05c0-2.74,.62-3.31,4.13-3.31,.19,0,.19-.58,0-.58h0Z"
                fill="#f7f5f3"
              />
              <path
                d="M312.5,8.25c-.18,2.06-.38,6.6-.4,8.36-.35-4.85-2.3-6.83-6.66-6.83-3.61,0-4.52,.33-4.52,3.37v22.13c0,2.59,.56,3.39,3.26,3.57-.32,0-.64-.01-.98-.02-1.13-.03-2.41-.06-3.81-.06-1.29,0-2.49,.03-3.65,.05-.38,0-.75,.02-1.11,.02,2.54-.17,3.33-.92,3.33-3.57V13.05c0-2.97-.87-3.28-4.57-3.28-4.01,0-6.1,1.96-7.13,6.71,.24-1.94,.58-6.08,.61-8.16,.16,.75,1.12,1.13,2.86,1.13h0c2.7,.09,6.04,.14,9.66,.14,2.59,0,4.41-.05,6.02-.09,1.17-.03,2.19-.06,3.25-.06,1.78,0,3.3-.09,3.85-1.21m.08-.47c-.13,0-.26,.06-.28,.18-.34,1.01-1.49,1.2-3.65,1.2-2.5,0-4.75,.14-9.26,.14-3.6,0-6.91-.05-9.65-.14-.91,0-2.59-.1-2.59-1.06,0-.16-.13-.23-.27-.23-.15,0-.3,.08-.3,.23,0,2.16-.43,7.2-.67,8.83,0,.08,.15,.13,.3,.13,.13,0,.25-.04,.28-.13,.96-4.85,2.93-6.86,6.91-6.86,3.6,0,4.27,.24,4.27,2.98v22.23c0,2.78-.72,3.31-4.61,3.31-.14,0-.14,.58,0,.58,1.78,0,3.94-.1,6.34-.1,2.54,0,4.66,.1,6.38,.1,.14,0,.14-.58,0-.58-3.98,0-4.56-.53-4.56-3.31V13.15c0-2.74,.58-3.07,4.22-3.07,4.18,0,6.1,1.87,6.38,6.86,.02,.07,.17,.11,.31,.11s.27-.04,.27-.11c0-1.54,.24-7.01,.43-8.98,0-.12-.12-.18-.25-.18h0Z"
                fill="#f7f5f3"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="imageContainer" ref={imageRef}>
        <img
          src={slice.primary["header-image"].url}
          alt={slice.primary["header-image"].alt}
        />
      </div>
    </header>
  );
}
