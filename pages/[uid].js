import { SliceZone } from "@prismicio/react";
import { Layout } from "../components/Layout";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../prismicio";
import { components } from "../slices";
import Head from "next/head";

const Page = ({ slices, menu, page }) => {
  return (
    <Layout menu={menu}>
      <Head>
        <title>{page.data.title}</title>
        <meta name="description" content={page.data.description} />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const menu = await client.getSingle("menu");
  const page = await client.getByUID("webpage", params.uid);

  return {
    props: {
      menu,
      page,
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
