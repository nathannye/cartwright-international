import * as ReactGA from "react-ga4";
import Router from "next/router";

export const initGA = (id) => {
  ReactGA.initialize([
    {
      trackingID: "G-HTZD3HXCED",
    },
  ]);
};
