import Link from "next/link";
import { EmailForm } from "../components/EmailForm";

export const Footer = ({ contact }) => {
  return (
    <footer>
      <div className="topSplit">
        <h1>Let’s make it happen, drop us a line</h1>
        <EmailForm />
      </div>
      <div className="bottomSplit">
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
        <div>
          {/* <a href={`mailto:${contact.data.email}`}>{contact.data.email}</a> •
          <a href={`tel:${contact.data["phone-number"]}`}></a> */}
        </div>
      </div>
    </footer>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  // const contact = await client.getSingle("contact-us");

  return {
    props: { contact },
  };
}
