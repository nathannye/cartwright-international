import "../styles/global.min.css";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import Head from "next/head";
import ScrollToTop from "../components/ScrollTop";
import { useRouter } from "next/router";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";

import * as ga from "../lib/ga";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
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
