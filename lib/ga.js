import GA4React, { useGA4React } from "ga-4-react";
import Router from "next/router";

export const initGA = () => {
  var location = Router.pathname;
  const ga = new GA4React("G-HTZD3HXCED");
};
