import { Navbar } from "./Navbar";

export const Layout = ({ children, menu }) => {
  return (
    <div>
      {/* <Head>
        <title> Prismic Next.js Multi Page Website </title>
      </Head> */}
      <Navbar menu={menu} />
      <main>{children}</main>
    </div>
  );
};
