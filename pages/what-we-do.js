import { createClient } from "../prismicio";

export default function WhatWeDo({ page }) {
  return (
    <header>
      <h4>{page.data.subhead}</h4>
      <h1>{page.data.heading}</h1>
    </header>
  );
}

export async function getStaticProps({ uid, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("page", "what-we-do");

  return {
    props: { page },
  };
}
