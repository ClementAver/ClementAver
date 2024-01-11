import { useState, useEffect } from "react";
import { projects } from "../data/data";
import type { Project } from "../types";
import ProjectIntro from "@/components/project/ProjectIntro";
import ProjectOutro from "@/components/project/ProjectOutro";
import MediaTile from "@/components/Tiles/MediaTile";
import Slider from "@/components/Slider/Slider";
import NavRight from "@/components/NavRight/NavRight";

export default function GalerieRobillard() {
  const [project, setProject] = useState<Project>();

  const id = "galerierobillard";

  useEffect(() => {
    const project = projects.filter((project) => project.id === id)[0];
    setProject(project);

    // Chrome scroll-snap-align fixes :
    const interval = setInterval(snapFixe);

    function snapFixe() {
      const main = document.getElementsByTagName("main")[0];
      if (main.classList.contains("scroll-y-mandatory")) clearInterval(interval);
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
    <main
      tabIndex={-1}
      className="projects"
    >
      <h1 className="sr-only">{project?.title}</h1>
      <NavRight
        sections={[
          {
            id: "intro",
            name: "Présentation",
          },
          {
            id: "presentation-du-site",
            name: "Présentation du site",
          },
          {
            id: "projet-figma",
            name: "Projet Figma",
          },
          {
            id: "details-des-maquettes",
            name: "Détails des maquettes",
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
          id="presentation-du-site"
          media={{ className: "media", type: "video/mp4", src: `${project.medias[0].src}`, poster: `${project.medias[0].poster}`, alt: `${project.medias[0].alt}`, controls: true, muted: true }}
          description="Vidéo de Présentation du site."
          noDescription
          softwares={["fi", "ae"]}
        />
      )}

      {project && (
        <Slider
          id="projet-figma"
          medias={[
            { className: "media-slider", src: `${project.medias[1].src}`, alt: `${project.medias[1].alt}` },
            { className: "media-slider", src: `${project.medias[2].src}`, alt: `${project.medias[2].alt}` },
          ]}
          description="Conception des maquettes sur figma permettant une présentation dynamique au client."
          softwares={["fi", "ai"]}
        />
      )}
      {project && (
        <Slider
          id="details-des-maquettes"
          medias={[
            { className: "media-slider", src: `${project.medias[3].src}`, alt: `${project.medias[3].alt}` },
            { className: "media-slider", src: `${project.medias[4].src}`, alt: `${project.medias[4].alt}` },
            { className: "media-slider", src: `${project.medias[5].src}`, alt: `${project.medias[5].alt}` },
            { className: "media-slider", src: `${project.medias[6].src}`, alt: `${project.medias[6].alt}` },
            { className: "media-slider", src: `${project.medias[7].src}`, alt: `${project.medias[7].alt}` },
          ]}
          description="Détails des maquettes"
          noDescription
          softwares={["fi", "ae"]}
        />
      )}
      <ProjectOutro quote="That's all folks" />
    </main>
  );
}
