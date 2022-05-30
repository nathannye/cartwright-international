import { createClient } from "../prismicio";
import Link from "next/link";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { EmailForm } from "../components/EmailForm";

const MeetUs = ({ page, menu, footer }) => {
  return (
    <Layout menu={menu} footer={footer}>
      <Head>
        <title>{page.data.title}</title>
      </Head>
      <div id="meetUsPage">
        <main>
          <h1>
            Let’s get
            <br />
            things rolling
          </h1>
          <h1>
            <a href={`mailto:${page.data.email}`}>{page.data.email}</a>
          </h1>
          <h1>
            <a href={`tel:${[page.data["phone-number"]]}`}>
              {page.data["phone-number"]}
            </a>
          </h1>
        </main>
        <footer>
          <div>
            <Link href="/">
              <a className="secondaryLink">Privacy Policy</a>
            </Link>
            <p> © {new Date().getFullYear()} Cartwright International</p>
            <a
              className="secondaryLink"
              href="https://www.nye.design"
              target="_blank"
              rel="noreferrer"
            >
              Made by Nathan Nye
            </a>
          </div>
          <EmailForm />
        </footer>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("contact-us");
  const menu = await client.getSingle("menu");

  return {
    props: { page, menu },
  };
}

export default MeetUs;
