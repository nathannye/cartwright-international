import { Layout } from "../components/Layout";
import { components } from "../slices";
import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";

const Events = ({ page, menu, footer, tickets }) => {
  // console.log(tickets);

  return (
    <Layout footer={footer} menu={menu}>
      <SliceZone
        slices={page.data.slices}
        components={components}
        tickets={tickets}
      />
      <h3 id="moreQuestions">
        <a href="mailto:info@cartwrightintl.net">
          More questions? <u>info@cartwrightintl.net</u>
        </a>
      </h3>
    </Layout>
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
