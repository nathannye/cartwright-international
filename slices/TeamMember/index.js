import React from "react";

const TeamMember = ({ slice }) => {
  return (
    <section id="teamMembers">
      {slice.items.map((item) => (
        <div key={item.name} className="teamMemberEntry">
          <h4>{item.position}</h4>
          <img src={item.image.url} alt={item.image.alt} />
          <div className="teamMemberText">
            <h3>{item.name}</h3>
            <p>{item.bio}</p>
            <a href={`mailto:${item.email}`}>Contact</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeamMember;
