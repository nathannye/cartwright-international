import Lottie from "lottie-web/build/player/lottie_light";
import animationData from "../public/lottie/oliveAnim.json";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";

const OliveBranch = () => {
  const anim = useRef(null);
  const containerRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (containerRef.current) {
      anim.current = Lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
      });

      return () => anim.current.destroy();
    }
  });

  return <div className="oliveBranch" ref={containerRef}></div>;
};

export default OliveBranch;
