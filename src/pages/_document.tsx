import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
