import { PrismicRichText } from "@prismicio/react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import Head from "next/head";
import gsap from "gsap";
import { useRef } from "react";

export const PrivacyPolicy = ({ page, menu }) => {
  const pageRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.set(pageRef.current, {
      y: 45,
    });

    gsap.to(pageRef.current, {
      y: 0,
    });
  });

  return (
    <Layout menu={menu}>
      <Head>
        <title>{page.data.title}</title>
      </Head>
      <main id="privacyPolicy" ref={pageRef}>
        <h1>{page.data.title}</h1>
        <div id="privacyBody">
          <PrismicRichText field={page.data.policy} />
        </div>
      </main>
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
