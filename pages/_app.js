import "../styles/global.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import { VerticalListLarge } from "../slices";

function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Navbar />
        <Component {...pageProps} />
        <VerticalListLarge />
        <Footer />
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
