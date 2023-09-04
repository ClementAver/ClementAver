import { useState, useEffect } from "react";
import { projects } from "../../../data/data";
import type { Project } from "../../../Types";
import ProjectIntro from "../../../components/ProjectIntro/ProjectIntro";
import ProjectOutro from "../../../components/ProjectOutro/ProjectOutro";
import MediaTile from "../../../components/tiles/MediaTile/MediaTile";
import Slider from "../../../components/Slider/Slider";

export default function GalerieRobillard() {
  const [project, setProject] = useState<Project>();

  window.addEventListener("keyup", (e) => {
    if (e.key === "Tab") {
      console.log(e.target);
    }
  });

  const id = "galerierobillard";

  useEffect(() => {
    const project = projects.filter((project) => project.id === id)[0];
    setProject(project);
  }, []);

  return (
    <main className="projects">
      {project && <ProjectIntro project={project} />}
      {project && (
        <MediaTile
          id="Présentation"
          media={{ className: "media", type: "video/mp4", src: `${project.medias[0].src}`, poster: `${project.medias[0].poster}`, alt: `${project.medias[0].alt}`, controls: true, muted: true }}
          // description="Vidéo de Présentation du site."
          softwares={["fi", "ae"]}
        />
      )}

      {project && (
        <Slider
          id="Présentation du site"
          medias={[
            { className: "media-slider", src: `${project.medias[1].src}`, alt: `${project.medias[1].alt}` },
            { className: "media-slider", src: `${project.medias[2].src}`, alt: `${project.medias[2].alt}` },
          ]}
          description="Conception des maquettes sur figma permettant une présentation dynamique au client."
          softwares={["fi", "ae"]}
        />
      )}
      {project && (
        <Slider
          id="Présentation du site"
          medias={[
            { className: "media-slider", src: `${project.medias[3].src}`, alt: `${project.medias[3].alt}` },
            { className: "media-slider", src: `${project.medias[4].src}`, alt: `${project.medias[4].alt}` },
            { className: "media-slider", src: `${project.medias[5].src}`, alt: `${project.medias[5].alt}` },
            { className: "media-slider", src: `${project.medias[6].src}`, alt: `${project.medias[6].alt}` },
            { className: "media-slider", src: `${project.medias[7].src}`, alt: `${project.medias[7].alt}` },
          ]}
          // description="Conception des maquettes sur figma permettant une présentation dynamique au client."
          softwares={["fi", "ae"]}
        />
      )}
      <ProjectOutro quote="Et ils vécurent heureux."/>
    </main>
  );
}
