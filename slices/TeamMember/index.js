import React from "react";
import { PrismicText } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";

const TeamMember = ({ slice }) => (
  <div className="teamMember">
    {slice.primary.position ? (
      <h4>
        <PrismicText field={slice.primary.title} />
      </h4>
    ) : null}
    {slice.primary.image ? (
      <Image src={slice.primary.image.url} alt={slice.primary.image.alt} />
    ) : (
      ""
    )}
    <h3>{slice.primary.name}</h3>
    <p>{slice.primary.bio ? <PrismicText field={slice.primary.bio} /> : ""}</p>
    {/* {slice.primary.email ? (
      <Link href={`mailto:${slice.primary.email}`}>contact</Link>
    ) : null} */}
  </div>
);

export default TeamMember;
