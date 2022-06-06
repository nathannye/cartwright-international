import { createClient } from "../prismicio";
import { components } from "../slices";
import { SliceZone } from "@prismicio/react";
import Head from "next/head";
import { Layout } from "../components/Layout";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Index = ({ page, menu, footer }) => {
  return (
    <Layout menu={menu} footer={footer}>
      <Head>
        <title>{page.data.title}</title>
        <meta
          name="description"
          content="A sales consulting agency with a framework for success based on actively understanding your businesses objectives."
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
      </Head>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("webpage", "home");
  const footer = await client.getSingle("contact-us");
  const menu = await client.getSingle("menu");

  return {
    props: { page, footer, menu },
    // function() {
    //   ScrollTrigger.refresh();
    // },
  };
}
