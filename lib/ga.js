import ReactGA from "react-ga4";

export const initGA = (id) => {
  ReactGA.initialize([
    {
      trackingId: id,
    },
  ]);
};
