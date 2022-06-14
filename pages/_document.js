import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="shortcut icon"
          href="./favicon-32x32.ico"
          type="image/x-icon"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HTZD3HXCED"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HTZD3HXCED', { page_path: window.location.pathname });
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
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
