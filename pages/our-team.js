import { createClient } from "../prismicio";
import { components } from "../slices/";
import { SliceZone } from "@prismicio/react";
import Head from "next/head";

const OurTeam = ({ page }) => {
  return (
    <Head>
      <title>Our Team</title>
      <meta
        name="description"
        content="An in-house team of dedicated individuals who strive to push results for your teams and management. Every. Day."
      />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      ></meta>
      <SliceZone slices={page.data.slices} components={components} />
    </Head>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("our-team");

  return {
    props: { page },
  };
}

export default OurTeam;
