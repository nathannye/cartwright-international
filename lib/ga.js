import * as ReactGA from "react-ga4";
import Router from "next/router";

export const initGA = (id) => {
  const location = Router.router.asPath;

  if ("G-HTZD3HXCED") {
    ReactGA.initialize("G-HTZD3HXCED");
  }
};
