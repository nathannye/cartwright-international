import * as ReactGA from "react-ga4";

export const initGA = (id) => {
  if ("G-HTZD3HXCED") {
    ReactGA.initialize(id);
  }
};
