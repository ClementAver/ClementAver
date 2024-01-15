import { useState, useEffect } from "react";
import { projects } from "../data/data";
import type { Project } from "../types";
import Head from "next/head";
import ProjectIntro from "@/components/project/ProjectIntro";
import ProjectOutro from "@/components/project/ProjectOutro";
import MediaTile from "@/components/Tiles/MediaTile";
import Slider from "@/components/Slider/Slider";
import NavRight from "@/components/NavRight/NavRight";

export default function FFB() {
  const [project, setProject] = useState<Project>();

  const id = "ffb";

  useEffect(() => {
    const project = projects.filter((project) => project.id === id)[0];
    setProject(project);

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
        <title>CA - FFB</title>
        <meta
          name="description"
          content="Page projet – Fédération Française de Béhourd"
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
            id: "photo-d-ensemble",
            name: "Photo d'ensemble",
          },
          {
            id: "affiche",
            name: "Affiche",
          },
          {
            id: "details-de-l-affiche",
            name: "Détails de l'affiche",
          },
          {
            id: "depliant",
            name: "Dépliant",
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
          id="photo-d-ensemble"
          media={{
            className: "media",
            src: `${project.medias[0].src}`,
            alt: `${project.medias[0].alt}`,
          }}
          noDescription
        />
      )}
      {project && (
        <MediaTile
          id="affiche"
          media={{
            className: "media",
            src: `${project.medias[1].src}`,
            alt: `${project.medias[1].alt}`,
          }}
          description={
            "Affiche produite à l’occasion du tournoi de Béhourd de la Citadelle."
          }
          softwares={["in", "ai", "ps"]}
        />
      )}
      {project && (
        <Slider
          id="details-de-l-affiche"
          medias={[
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
          noDescription
        />
      )}
      {project && (
        <Slider
          id="depliant"
          medias={[
            {
              className: "media-slider",
              src: `${project.medias[4].src}`,
              alt: `${project.medias[4].alt}`,
            },
            {
              className: "media-slider",
              src: `${project.medias[5].src}`,
              alt: `${project.medias[5].alt}`,
            },
            {
              className: "media-slider",
              src: `${project.medias[6].src}`,
              alt: `${project.medias[6].alt}`,
            },
            {
              className: "media-slider",
              src: `${project.medias[7].src}`,
              alt: `${project.medias[7].alt}`,
            },
          ]}
          description={
            "Dépliant introduisant la discipline ainsi que la fédération auprès du public. Distribué durant les tournois."
          }
          softwares={["in", "ai", "ps"]}
        />
      )}

      <ProjectOutro quote="Fuyez, pauvres fous !" />
    </main>
</>
  );
}
