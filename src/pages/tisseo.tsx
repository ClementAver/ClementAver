import { useState, useEffect } from "react";
import { projects } from "../data/data";
import type { Project } from "../types";
import Head from "next/head";
import ProjectIntro from "@/components/project/ProjectIntro";
import ProjectOutro from "@/components/project/ProjectOutro";
import MediaTile from "@/components/Tiles/MediaTile";
import Slider from "@/components/Slider/Slider";
import NavRight from "@/components/NavRight/NavRight";

export default function Tisseo({ project }: { project: Project }) {
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
        <title>CA - Tisseo</title>
        <meta
          name="description"
          content="Page projet – Tisseo"
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
              name: "Animation",
            },
            {
              id: "details",
              name: "Détails du bus",
            },
            {
              id: "kawaii",
              name: "N'est-il pas mignon ?",
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
              muted: true,
            }}
            description="Livrable calibré sur six secondes avec un viseul simple animé ainsi qu'une accroche courte et assurée."
            softwares={["ae"]}
          />
        )}
        {project && (
          <Slider
            id="details"
            medias={[
              {
                className: "media-slider",
                src: `${project.medias[1].src}`,
                alt: `${project.medias[1].alt}`,
              },
              {
                className: "media-slider",
                src: `${project.medias[2].src}`,
                alt: `${project.medias[2].alt}`,
              },
              {
                className: "media-slider",
                src: `${project.medias[3].src}`,
                alt: `${project.medias[3].alt}`,
              },
            ]}
            description="Tracé du bus, puis réglage des pleins et contours, et animation."
            softwares={["ai", "ae"]}
          />
        )}
        {project && (
          <MediaTile
            id="kawaii"
            media={{
              className: "media",
              src: `${project.medias[4].src}`,
              alt: `${project.medias[4].alt}`,
            }}
            noDescription
          />
        )}

        <ProjectOutro quote="À plus dans le bus !" />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = await import(`@/data/data`);
  const projects = data.projects;
  const project = projects.filter((project) => project.id === "tisseo")[0];

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
