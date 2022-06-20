import "../styles/global.min.css";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import Script from "next/script";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import Head from "next/head";
import ScrollToTop from "../components/ScrollTop";
import { useRouter } from "next/router";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from "react-cookie-consent";
import { initGA } from "../lib/ga";

export default function MyApp({ Component, pageProps }) {
  const handleAcceptCookie = () => {
    if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
      initGA(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
      console.log("cookies accepted");
    }
  };

  const handleDeclineCookie = () => {
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  useIsomorphicLayoutEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

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
        <CookieConsent
          enableDeclineButton
          onAccept={handleAcceptCookie}
          onDecline={handleDeclineCookie}
          disableStyles={true}
          flipButtons
          buttonText="that's cool with me"
          declineButtonText="no, thanks."
          containerClasses="cookieNotification"
          disableButtonStyles={true}
          hideOnAccept={true}
          hideOnDecline={true}
        >
          We use cookies to help improve your experience with analytics. Is this
          okay with you?
        </CookieConsent>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
