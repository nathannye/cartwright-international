import { createClient } from "../prismicio";
import { components } from "../slices/";
import { SliceZone } from "@prismicio/react";

const OurTeam = ({ page }) => {
  return <SliceZone slices={page.data.slices} components={components} />;
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("our-team");

  return {
    props: { page },
  };
}

export default OurTeam;
