import { createClient } from "../prismicio";
import { components } from "../slices";

import { SliceZone } from "@prismicio/react";
import Head from "next/head";
import Loader from "../components/Loader";

const Homepage = ({ page }) => {
  return (
    <Head>
      <title>Cartwright International | Excellence Defined by Experience</title>
      <meta
        name="description"
        content="A sales consulting agency with a framework for success based on actively understanding your businesses objectives."
      />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      ></meta>
      <Loader />
      <SliceZone slices={page.data.slices} components={components} />
    </Head>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("homepage");

  return {
    props: { page },
  };
}

export default Homepage;
