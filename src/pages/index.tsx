import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Softwares from "@/components/Softwares/Softwares";
import HomeTile from "@/components/Tiles/HomeTile";

import { Project } from "@/types";
import { projects } from "@/data/data";
// import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   document.addEventListener(
  //     "focusin",
  //     function () {
  //       console.log("focused: ", document.activeElement);
  //     },
  //     true
  //   );
  // }, []);

  return (
    <>
      <Head>
        <title>Clément Aver – accueil</title>
        <meta
          name="description"
          content="page d'accueil"
        />
      </Head>
      <main
        className="home"
        tabIndex={-1}
      >
        <section className="container-slide">
          <div className="intro">
            <h1>Bonjour, et&nbsp;bienvenue.</h1>
            <p>
              Ce site est une fenêtre vers différentes réalisations de design
              graphique et motion de mon fait. Il témoigne de ma pratique et
              peut vous donner une idée de mon travail dans ces domaines.
            </p>
            <p>
              En reconversion,
              <br />
              <span className="bold">
                je cherche actuellement un poste de développeur web
              </span>
              .
              <br />
              Pour consulter mes projets de développement,
            </p>
            <p>
              ça se passe sur{" "}
              <Link
                href="https://github.com/ClementAver"
                target="_blank"
              >
                <Softwares softwares={["gh"]} />
              </Link>
              .
            </p>

            <p className="scale">↓</p>
          </div>
        </section>
        {projects.map((project: Project, index) => (
          <HomeTile
            key={`HomeTile-${index}`}
            project={project}
          />
        ))}
      </main>
    </>
  );
}
