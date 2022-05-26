import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en" charset="utf-8">
      <Head>
        <meta charset="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;1,500&family=IBM+Plex+Sans:ital,wght@1,400;0,400;0,500;0,600;1,400&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
