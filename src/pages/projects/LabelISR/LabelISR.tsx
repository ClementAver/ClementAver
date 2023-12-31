import { useState, useEffect } from "react";
import { projects } from "../../../data/data";
import type { Project } from "../../../types";
import ProjectIntro from "../../../components/ProjectIntro/ProjectIntro";
import ProjectOutro from "../../../components/ProjectOutro/ProjectOutro";
import MediaTile from "../../../components/tiles/MediaTile/MediaTile";
import Slider from "../../../components/Slider/Slider";
import NavRight from "../../../components/NavRight/NavRight";

export default function LabelISR() {
  const [project, setProject] = useState<Project>();

  const id = "labelisr";

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
            id: "voeux",
            name: "Vœux 2022",
          },
          {
            id: "gabarits-rs",
            name: "Gabarits rs",
          },
          {
            id: "gabarits-rs-anime",
            name: "Gabarits rs animés",
          },
          {
            id: "le-dico-vert",
            name: "Le dico vert",
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
          id="voeux"
          media={{ className: "media", type: "video/mp4", src: `${project.medias[0].src}`, poster: `${project.medias[0].poster}`, alt: `${project.medias[0].alt}`, controls: true, muted: false }}
          description="Vœux 2022 – Animation."
          softwares={["ae"]}
        />
      )}

      {project && (
        <Slider
          id="gabarits-rs"
          medias={[
            { className: "media-slider", src: `${project.medias[1].src}`, alt: `${project.medias[1].alt}` },
            { className: "media-slider", src: `${project.medias[2].src}`, alt: `${project.medias[2].alt}` },
            { className: "media-slider", src: `${project.medias[3].src}`, alt: `${project.medias[3].alt}` },
            { className: "media-slider", src: `${project.medias[4].src}`, alt: `${project.medias[4].alt}` },
            { className: "media-slider", src: `${project.medias[5].src}`, alt: `${project.medias[5].alt}` },
            { className: "media-slider", src: `${project.medias[6].src}`, alt: `${project.medias[6].alt}` },
            { className: "media-slider", src: `${project.medias[7].src}`, alt: `${project.medias[7].alt}` },
            { className: "media-slider", src: `${project.medias[8].src}`, alt: `${project.medias[8].alt}` },
          ]}
          description="Conception des maquettes sur figma permettant une présentation dynamique au client."
          softwares={["fi", "ai"]}
        />
      )}

      {project && (
        <Slider
          id="gabarits-rs-anime"
          medias={[
            { className: "media-slider", src: `${project.medias[9].src}`, alt: `${project.medias[9].alt}` },
            { className: "media-slider", src: `${project.medias[10].src}`, alt: `${project.medias[10].alt}` },
            { className: "media-slider", src: `${project.medias[11].src}`, alt: `${project.medias[11].alt}` },
          ]}
          description="Variantes des gabarits animés."
          softwares={["in", "ps"]}
        />
      )}

      {project && (
        <MediaTile
          id="le-dico-vert"
          media={{ className: "media", type: "video/mp4", src: `${project.medias[12].src}`, poster: `${project.medias[12].poster}`, alt: `${project.medias[12].alt}`, controls: true, muted: false }}
          description="Série d'animations définissant les termes techniques du l'investissement ESG."
          softwares={["ae"]}
        />
      )}

      <ProjectOutro quote="The End" />
    </main>
  );
}
