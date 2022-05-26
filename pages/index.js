import { createClient } from "../prismicio";
import { components } from "../slices/";

import { SliceZone } from "@prismicio/react";

const Homepage = ({ page }) => {
  return <SliceZone slices={page.data.slices} components={components} />;
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");

  return {
    props: { page },
  };
}

export default Homepage;
