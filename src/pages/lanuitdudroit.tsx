import { useState, useEffect } from "react";
import { projects } from "../data/data";
import type { Project } from "../types";
import Head from "next/head";
import ProjectIntro from "@/components/project/ProjectIntro";
import ProjectOutro from "@/components/project/ProjectOutro";
import MediaTile from "@/components/Tiles/MediaTile";
import NavRight from "@/components/NavRight/NavRight";

export default function LaNuitDuDroit({ project }: { project: Project }) {
  useEffect(() => {
    // Chrome scroll-snap-align fixes :
    const interval = setInterval(snapFixe);

    function snapFixe() {
      const main = document.getElementsByTagName("main")[0];
      if (main.classList.contains("scroll-y-mandatory"))
        clearInterval(interval);
      else {
        main.classList.add("scroll-y-mandatory");
      }
    }

    window.addEventListener("load", snapFixe);

    return () => {
      window.removeEventListener("load", snapFixe);
    };
  }, []);

  return (
    <>
      <Head>
        <title>CA - La Nuit Du Droit</title>
        <meta
          name="description"
          content="Page projet – La Nuit Du Droit"
        />
      </Head>
      <main
        className="projects"
        tabIndex={-1}
      >
        <h1 className="sr-only">{project?.title}</h1>
        <NavRight
          sections={[
            {
              id: "intro",
              name: "Présentation",
            },
            {
              id: "animation",
              name: "Présentation du site",
            },
            {
              id: "gif-region",
              name: "Gif région",
            },
            {
              id: "gif-evenement",
              name: "Gif évènement",
            },
            {
              id: "outro",
              name: "Bas de page",
            },
          ]}
        />

        {project && <ProjectIntro project={project} />}

        {project && (
          <MediaTile
            id="animation"
            media={{
              className: "media",
              type: "video/mp4",
              src: `${project.medias[0].src}`,
              poster: `${project.medias[0].poster}`,
              alt: `${project.medias[0].alt}`,
              controls: true,
              muted: false,
            }}
            description="Vidéo de Présentation de l’évènement."
            softwares={["ae"]}
          />
        )}
        {project && (
          <MediaTile
            id="gif-region"
            media={{
              className: "media",
              src: `${project.medias[1].src}`,
              alt: `${project.medias[1].alt}`,
            }}
            description="Série de gifs réalisée par régions afin de communiquer sur les évènements des différents territoires."
            softwares={["fi", "ps"]}
          />
        )}
        {project && (
          <MediaTile
            id="gif-evenement"
            media={{
              className: "media",
              src: `${project.medias[2].src}`,
              alt: `${project.medias[2].alt}`,
            }}
            description="Série de gifs réalisée pour promouvoir les principaux évènements de La Nuit du Droit."
            softwares={["fi", "ps"]}
          />
        )}
        <ProjectOutro quote="Et ils vécurent heureux." />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`@/data/data`);
  const projects = data.projects;
  const project = projects.filter(
    (project) => project.id === "lanuitdudroit"
  )[0];

  // Will redirect on destination
  if (projects.length === 0) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: { project },
  };
}
