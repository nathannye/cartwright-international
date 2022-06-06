import { PrismicLink } from "@prismicio/react";
import { useRef } from "react";
import { useRouter } from "next/router";

const MobileMenuLink = ({ el }) => {
  const router = useRouter();

  return (
    <PrismicLink
      field={el.link}
      className={router.asPath == `/${el.link.uid}` ? "active" : ""}
    >
      <span>
        <span className="lineTop"></span>
        <div className="activeBox">
          <div className="activeIndi"></div>
        </div>

        <h1>{el.label}</h1>
      </span>
    </PrismicLink>
  );
};

export default MobileMenuLink;
