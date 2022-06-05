import React from "react";
import Member from "../../components/Member";

const TeamMember = ({ slice }) => {
  const evens = slice.items.filter(
    (item) => slice.items.indexOf(item) % 2 === 0
  );
  const odds = slice.items.filter(
    (item) => slice.items.indexOf(item) % 2 === 1
  );

  return (
    <section id="teamMembers">
      <div className="col">
        {evens.map((entry, index) => (
          <Member entry={entry} key={entry + index} />
        ))}
      </div>
      <div className="col">
        {odds.map((entry, index) => (
          <Member entry={entry} key={entry + index} />
        ))}
      </div>
    </section>
  );
};

export default TeamMember;
