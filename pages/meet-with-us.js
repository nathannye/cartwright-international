import { createClient } from "../prismicio";
import Link from "next/link";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { EmailForm } from "../components/EmailForm";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";

const MeetUs = ({ page, menu }) => {
  useIsomorphicLayoutEffect(() => {});

  return (
    <Layout menu={menu} noFooter>
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
          {/* <h3 className="hasAnimatedUnderline"> */}
          <a href={`mailto:${page.data.email}`}>
            <h3>{page.data.email}</h3>
          </a>
          {/* </h3> */}
          {/* <h3 className="hasAnimatedUnderline"> */}
          <a href={`tel:${[page.data["phone-number"]]}`}>
            <h3>{page.data["phone-number"]}</h3>
          </a>
          {/* </h3> */}
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
