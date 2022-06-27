import "../styles/global.min.css";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import Notification from "../components/Notification";
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
import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [showNoti, setShowNoti] = useState(false);

  const handleAcceptCookie = () => {
    if ("G-HTZD3HXCED") {
      initGA("G-HTZD3HXCED");
    }
    setTimeout(() => {
      setShowNoti(true);
    }, 1500);
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
          onAccept={() => {
            handleAcceptCookie();
          }}
          onDecline={() => {
            handleDeclineCookie();
          }}
          disableStyles={true}
          flipButtons
          buttonText="that's cool with me"
          declineButtonText="no, thanks."
          containerClasses="cookieNotification"
          disableButtonStyles={true}
          hideOnAccept={true}
          hideOnDecline={true}
        >
          We use cookies to help improve our website with analytics. Is this
          okay with you?
        </CookieConsent>
        {showNoti && <Notification />}
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
