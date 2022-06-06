import { createClient } from "../prismicio";
import Link from "next/link";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { EmailForm } from "../components/EmailForm";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/dist/SplitText";

const MeetUs = ({ page, menu }) => {
  const meetUsRef = useRef(null);
  const tl = useRef(null);
  const solidSplit = useRef(null);
  const outlineSplit = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(SplitText);

    const q = gsap.utils.selector(meetUsRef.current);

    outlineSplit.current = new SplitText(q(".outlineHeading"), {
      type: "lines",
    });

    solidSplit.current = new SplitText(q(".solidHeading"), {
      type: "lines",
    });

    gsap.set(solidSplit.current.lines, {
      autoAlpha: 0,
      x: -45,
      display: "inline-block",
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });

    gsap.set(outlineSplit.current.lines, {
      x: -45,
      autoAlpha: 0,
    });

    tl.current = gsap.timeline({
      onComplete: () => {
        outlineSplit.current.revert();
        solidSplit.current.revert();
      },
      delay: 0.96,
    });

    tl.current
      .to(
        outlineSplit.current.lines,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.76,
          stagger: 0.09,
          ease: "power3.out",
        },
        0.3
      )
      .to(
        solidSplit.current.lines,
        {
          stagger: 0.1,
          duration: 0.74,
          ease: "power3.inOut",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        0.3
      )
      .to(
        solidSplit.current.lines,
        {
          x: 0,
          duration: 0.76,
          stagger: 0.09,
          autoAlpha: 1,
          ease: "power3.out",
        },
        0.3
      );
  }, []);

  return (
    <Layout menu={menu}>
      <Head>
        <title>{page.data.title}</title>
      </Head>
      <div id="meetUsPage" ref={meetUsRef}>
        <main>
          <div className="headingOverlapContainer">
            <h1 className="outlineHeading">
              Let’s get
              <br /> things rolling
            </h1>
            <h1 className="solidHeading">
              Let’s get <br />
              things rolling
            </h1>
          </div>
          {/* <h3 className="hasAnimatedUnderline"> */}
          <a href={`mailto:${page.data.email}`}>
            <h3>{page.data.email}</h3>
          </a>
          {/* </h3> */}
          {/* <h3 className="hasAnimatedUnderline"> */}
          <a href={`tel:${[page.data["phone-number"]]}`}>
            <h3>{page.data["phone-number"]}</h3>
          </a>
          {/* </h3> */}
        </main>
        <footer className="shortFooter">
          <EmailForm />
          <div className="infoSplit">
            <Link href="/">
              <a className="secondaryLink">Privacy Policy</a>
            </Link>
            <a
              className="secondaryLink"
              href="https://www.nye.design"
              target="_blank"
              rel="noReferrer"
            >
              Made by Nathan Nye
            </a>
            <p> © {new Date().getFullYear()} Cartwright International</p>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("contact-us");
  const menu = await client.getSingle("menu");

  return {
    props: { page, menu },
  };
}

export default MeetUs;
