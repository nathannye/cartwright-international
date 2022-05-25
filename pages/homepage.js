import { createClient } from "../prismicio";

function Homepage({ page }) {
  return page;
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.geSingle("homepage");

  return {
    props: { page },
  };
}

export default Homepage;
