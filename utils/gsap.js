import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";
import InertiaPlugin from "gsap/dist/InertiaPlugin";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";

gsap.registerPlugin(
  Draggable,
  InertiaPlugin,
  ScrollTrigger,
  ScrollSmoother,
  SplitText
);

gsap.defaults({
  duration: 0.86,
  ease: "power4.inOut",
});

export * from "gsap";
export * from "gsap/dist/Draggable";
export * from "gsap/dist/ScrollTrigger";
export * from "gsap/dist/InertiaPlugin";
export * from "gsap/dist/ScrollSmoother";
export * from "gsap/dist/SplitText";
