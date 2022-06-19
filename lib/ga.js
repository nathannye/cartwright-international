import * as ReactGA from "react-ga";

export const initGA = (id) => {
  if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
    ReactGA.initialize(id);
  }
};
