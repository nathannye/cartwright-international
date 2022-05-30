import { SliceZone } from "@prismicio/react";
import { Layout } from "../components/Layout";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../prismicio";
import { components } from "../slices";
import Head from "next/head";

const Page = ({ slices, menu }) => {
  return (
    <Layout menu={menu}>
      <Head>
        <title>this thing</title>
      </Head>
      <SliceZone slices={slices} components={components} />
    </Layout>
  );
};

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getSingle("menu");
  const page = await client.getByUID("webpage", params.uid);

  return {
    props: {
      menu,
      slices: page.data.slices,
    },
  };
}

export async function getStaticPaths({ params, previewData }) {
  const client = createClient({ previewData });

  const pages = await client.getAllByType("webpage");

  return {
    // paths: pages.map((p) => prismicH.asLink(p, linkResolver)),
    paths: pages.map((p) => prismicH.asLink(p, linkResolver)),
    fallback: false,
  };
}

export default Page;
