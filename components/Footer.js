import Link from "next/link";
import { useRouter } from "next/router";
import MailchimpForm from "../components/MailchimpForm";
import { createClient } from "../prismicio";

const Footer = ({ contact }) => {
  const router = useRouter();

  return (
    <footer className={router.asPath === "/meet-with-us" ? "noFooter" : ""}>
      <div className="topSplit">
        <div>
          <h1>Let’s make it happen, drop us a line</h1>
          <div className="contactInfo">
            <a href="mailto:charles@cartwrightintl.net">
              <h3>info@cartwrightintl.net </h3>
            </a>
            <span>
              <h3>•</h3>
            </span>
            <a href="tel:616-420-4006">
              <h3> 616-420-4006</h3>
            </a>
          </div>
        </div>
        <div>
          <MailchimpForm />
          <div id="socialIcons">
            <h2>keep up with us on social!</h2>
            <div>
              <a href="">
                <img src="./facebook.svg" alt="facebook icon" />
              </a>
              <a
                href="https://www.instagram.com/cartwright_international/"
                target="_blank"
                rel="noReferrer"
              >
                <img src="./instagram.svg" alt="instagram icon" />
              </a>
              <a href="">
                <img src="./twitter.svg" alt="twitter icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomSplit">
        <div>
          <a className="secondaryLink">Made by Nathan Nye</a>
          <Link href="/privacy-policy">
            <a className="internalLink" id="privacy">
              Privacy Policy
            </a>
          </Link>
        </div>
        <p> © {new Date().getFullYear()} Cartwright International</p>
      </div>
    </footer>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const contact = await client.getSingle("contact-us");

  return {
    props: { contact },
  };
}

export default Footer;
