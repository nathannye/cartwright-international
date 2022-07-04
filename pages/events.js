import { Layout } from "../components/Layout";
import { components } from "../slices";
import { SliceZone } from "@prismicio/react";
import EventSlider from "../slices/EventSlider";
import { createClient } from "../prismicio";

const Events = ({ page, menu, footer }) => {
  return (
    <Layout footer={footer} menu={menu}>
      <SliceZone slices={page.data.slices} components={components} />
      {/* <h3>
        More questions?{" "}
        <a href={`mailto:${page.data["contact-email"]}`}>
          {page.data["contact-email"]}
        </a>
      </h3> */}
    </Layout>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  // const zoomDataRes = await fetch(
  //   `https://zoom.us/oauth/authorize?response_type=code&client_id=${process.env.ZOOM_CLIENT_ID}&redirect_uri=${process.env.ZOOM_REDIRECT_URL}`,
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );
  // const events = await zoomDataRes.json();

  const page = await client.getSingle("event-page");
  const menu = await client.getSingle("menu");
  const footer = await client.getSingle("footer-contact");

  return {
    props: { page, menu, footer },
  };
}

export default Events;
