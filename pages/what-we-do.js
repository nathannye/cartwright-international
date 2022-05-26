import { createClient } from "../prismicio";
import { components } from "../slices/";
import { SliceZone } from "@prismicio/react";

const WhatWeDo = ({ page }) => {
  return <SliceZone slices={page.data.slices} components={components} />;
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("what-we-do");

  return {
    props: { page },
  };
}

export default WhatWeDo;
