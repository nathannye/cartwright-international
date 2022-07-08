import { Layout } from "../components/Layout";
import { components } from "../slices";
import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";

const Events = ({ page, menu, footer, tickets }) => {
  return (
    <>
      <Layout footer={footer} menu={menu}>
        <SliceZone
          slices={page.data.slices}
          components={components}
          tickets={tickets}
        />
      </Layout>
      <img src="./sliderBacker.jpg" id="backerAll" />
    </>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const page = await client.getSingle("event-page");
  const menu = await client.getSingle("menu");
  const tickets = await client.getSingle("ticket-tiers");
  const footer = await client.getSingle("footer-contact");

  return {
    props: { page, menu, footer, tickets },
  };
}

export default Events;
