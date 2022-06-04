import FrameworkEntry from "../../components/FrameworkEntry";

const OurFramework = ({ slice }) => {
  return (
    <section id="ourFramework">
      <h2>{slice.primary.title}</h2>
      {slice.items.map((entry, index) => (
        <FrameworkEntry entry={entry} index={index} key={entry + index} />
      ))}
    </section>
  );
};

export default OurFramework;
