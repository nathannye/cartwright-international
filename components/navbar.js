import { linkResolver, repositoryName } from "../prismicio";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";

function Navbar() {
  return (
    <div id="navbar">
      <img src="" alt="" id="logo" />
      <nav>
        <PrismicProvider
          linkResolver={linkResolver}
          internalLinkComponent={({ href, children, ...props }) => (
            <Link href={href}>
              <a {...props}>{children}</a>
            </Link>
          )}
        ></PrismicProvider>
      </nav>
    </div>
  );
}

export default Navbar;
