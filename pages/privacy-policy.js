import { PrismicRichText } from "@prismicio/react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import Head from "next/head";
import gsap from "gsap";

export const PrivacyPolicy = ({ page, menu }) => {
  useIsomorphicLayoutEffect(() => {
    gsap.set("div#privacyPolicy", {
      y: 45,
    });

    gsap.to("div#privacyPolicy", {
      y: 0,
    });
  });

  return (
    <Layout menu={menu}>
      <Head>
        <title>{page.data.title}</title>
      </Head>
      <div id="privacyPolicy">
        <h1>{page.data.title}</h1>
        <div id="privacyBody">
          <PrismicRichText field={page.data.policy} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("privacy-policy");
  const menu = await client.getSingle("menu");

  return {
    props: { page, menu },
  };
}

export default PrivacyPolicy;
