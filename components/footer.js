import Link from "next/link";

function Footer() {
  return (
    <footer>
      <h1>Let’s make it happen, drop us a line</h1>
      <div className="bottomSplit">
        <Link href="/">
          <a className="secondaryLink">Privacy Policy</a>
        </Link>
        <p> © {new Date().getFullYear()} Cartwright International</p>
      </div>
    </footer>
  );
}

export default Footer;
