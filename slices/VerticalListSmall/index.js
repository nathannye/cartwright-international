import React from "react";
import VerticalListStandard from "../../components/VerticalListStandard";
import VerticalListDescription from "../../components/VerticalListDescription";
import VerticalListDropdown from "../../components/VerticalListDropdown";

const VerticalListSmall = ({ slice }) => {
  if (slice.variation === "default") {
    return <VerticalListStandard slice={slice} />;
  } else if (slice.variation === "verticalListWithDescription") {
    return <VerticalListDescription slice={slice} />;
  } else if (slice.variation === "verticalListWithDropdown") {
    return <VerticalListDropdown slice={slice} />;
  }
};

export default VerticalListSmall;
