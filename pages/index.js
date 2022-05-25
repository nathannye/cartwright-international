import Head from "next/head";
import HeaderHome from "../slices/HeaderHome";
import ImgCarousel from "../slices/ImgCarousel";
import OurFramework from "../slices/OurFramework";
import Quote from "../slices/Quote";
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
      <OurFramework />
      <Quote />
    </div>
  );
}
