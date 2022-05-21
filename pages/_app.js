import "../styles/global.css";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";

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
        <Footer />
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
