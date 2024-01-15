import Head from "next/head";

export default function Custom500() {
  return (
    <>
      <Head>
        <title>Clément Aver – accueil</title>
        <meta
          name="description"
          content="page d'accueil"
        />
      </Head>
      <h1>500 - Server-side error occurred</h1>
    </>
  );
}
