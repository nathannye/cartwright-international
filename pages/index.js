import Head from "next/head";
import HeaderHome from "../slices/HeaderHome";
import ImgCarousel from "../slices/ImgCarousel";
import VerticalListSmall from "../slices/VerticalListSmall";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cartwright International</title>
      </Head>
      <HeaderHome />
      <VerticalListSmall />
      <ImgCarousel />
    </div>
  );
}
