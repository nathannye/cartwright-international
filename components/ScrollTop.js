import { useRouter } from "next/router";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";

const ScrollToTop = (props) => {
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    if (!router.hash) {
      window.scrollTo(0, 0);
    }
  }, [router]);

  return <>{props.children}</>;
};

export default ScrollToTop;
