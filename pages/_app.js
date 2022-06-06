import "../styles/global.min.css";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import Head from "next/head";
import ScrollToTop from "../components/ScrollTop";

export default function MyApp({ Component, pageProps, router }) {
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
