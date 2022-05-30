import React from "react";
import useEffect from "react";

const TeamMember = ({ slice }) => {
  const members = slice.items;

  return (
    <section id="teamMembers">
      <svg>
        <filter
          id="filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="turbulence"
            baseFrequency="0.036 0.016"
            numOctaves="14"
            seed="1"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="24"
            xChannelSelector="R"
            yChannelSelector="R"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="displacementMap"
          />
        </filter>
      </svg>
      <div className="col">
        {slice.items.map((item) => (
          <div key={item.name} className="teamMemberEntry">
            <h4>{item.position}</h4>
            <div className="imageContainer">
              <img src={item.image.url} alt={item.image.alt} />
            </div>
            <div className="teamMemberText">
              <h3>{item.name}</h3>
              <p>{item.bio}</p>
              <a href={`mailto:${item.email}`} className="internalLink">
                Contact
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="col">
        {slice.items.map((item) => (
          <div key={item.name} className="teamMemberEntry">
            <h4>{item.position}</h4>
            <div className="imageContainer">
              <img src={item.image.url} alt={item.image.alt} />
            </div>
            <div className="teamMemberText">
              <h3>{item.name}</h3>
              <p>{item.bio}</p>
              <a href={`mailto:${item.email}`} className="internalLink">
                Contact
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMember;
