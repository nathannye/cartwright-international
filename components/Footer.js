import Link from "next/link";
import { useRouter } from "next/router";
import MailchimpForm from "../components/MailchimpForm";

const Footer = ({ footer, slices }) => {
  const router = useRouter();

  return (
    <footer className={router.asPath === "/meet-with-us" ? "noFooter" : ""}>
      <div className="topSplit">
        <div>
          <h1>{footer.data["footer-heading"]}</h1>
          <div className="contactInfo">
            <a href={`mailto:${footer.data.email}`}>
              <h3>{footer.data.email} </h3>
            </a>
            <span>
              <h3>•</h3>
            </span>
            <a href={`tel:${footer.data["phone-number"]}`}>
              <h3>{footer.data["phone-number"]}</h3>
            </a>
          </div>
        </div>
        <div>
          <MailchimpForm />
          <div id="socialIcons">
            <h2>{footer.data["social-title"]}</h2>
            <div>
              {footer.data.social.map((social, index) => (
                <a href={social.url} key={index}>
                  <img src={social.image.url} alt={social.image.alt} />
                </a>
              ))}
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

export default Footer;
