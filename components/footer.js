import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="topSplit">
        <h1>Let’s make it happen, drop us a line</h1>
        <div>emailthing</div>
      </div>

      <div className="bottomSplit">
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
    </footer>
  );
}

export default Footer;
