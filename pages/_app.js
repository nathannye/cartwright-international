import "../styles/global.min.css";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import Head from "next/head";
import ScrollToTop from "../components/ScrollTop";
import { useRouter } from "next/router";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag("config", "[Tracking ID]", {
      page_path: url,
    });
  };

  useIsomorphicLayoutEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <ScrollToTop />
      <PrismicPreview repositoryName={repositoryName}>
        <Head></Head>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
