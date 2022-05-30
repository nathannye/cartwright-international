import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="topSplit">
        <h1>Let’s make it happen, drop us a line</h1>
        <div id="emailFormContainer">
          {/* <h2>get the latest tips and training</h2> */}
          <form>
            <label htmlFor="email">
              Get the latest tips and training
              <input
                type="email"
                name="email"
                id="emailField"
                placeholder="What's a good email for you?"
              />
            </label>
            <input type="submit" value="Submit" />
            <span className="lineBottom"></span>
          </form>
        </div>
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
};
