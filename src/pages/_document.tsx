import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/favicons/favicon.svg"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/favicons/favicon.png"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
