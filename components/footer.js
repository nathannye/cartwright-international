import Link from "next/link";

function Footer() {
  // var year = new Date().getFullYear;

  return (
    <footer>
      <h1>Let’s make it happen, drop us a line</h1>
      <h2>contact stuff</h2>
      <div className="bottomSplit">
        <div>
          {/* <Link>
            <a>Privacy Policy</a>
          </Link> */}
          {/* {`© ${year}`} */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
