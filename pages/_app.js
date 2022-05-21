import "../styles/global.css";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
