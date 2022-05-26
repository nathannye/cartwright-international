import { createClient } from "../prismicio";
import { components } from "../slices/";
import { SliceZone } from "@prismicio/react";
import Head from "next/head";

const WhatWeDo = ({ page }) => {
  return (
    <Head>
      <title>What We Do</title>
      <meta
        name="description"
        content="Delivering tailored consulting and speaking engagements designed to bring your organization together and collectively strive for performance"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <SliceZone slices={page.data.slices} components={components} />
    </Head>
  );
};

// export async function getStaticProps({ previewData }) {
//   const client = createClient({ previewData });

//   const page = await client.getSingle("what-we-do");

//   return {
//     props: { page },
//   };
// }

export default WhatWeDo;
