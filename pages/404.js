import Navbar from "../components/Navbar";
import { createClient } from "../prismicio";

const Custom404 = ({ page, menu }) => {
  return (
    <>
      <Navbar menu={menu}></Navbar>
      <div id="ErrorPage">
        <h2>{page.data.heading}</h2>
      </div>
    </>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("404-error");
  const menu = await client.getSingle("menu");

  return {
    props: { page, menu },
  };
}

export default Custom404;
