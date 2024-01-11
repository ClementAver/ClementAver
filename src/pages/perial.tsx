import { useState, useEffect } from "react";
import { projects } from "../data/data";
import type { Project } from "../types";
import ProjectIntro from "@/components/project/ProjectIntro";
import ProjectOutro from "@/components/project/ProjectOutro";
import MediaTile from "@/components/Tiles/MediaTile";
import Slider from "@/components/Slider/Slider";
import NavRight from "@/components/NavRight/NavRight";

export default function Perial() {
  const [project, setProject] = useState<Project>();

  const id = "perial";

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
            id: "la-marseillaise",
            name: "La Marseillaise",
          },
          {
            id: "dans-le-retro",
            name: "#DansLeRétro",
          },
          {
            id: "acquisition-du-trimestre",
            name: "L'acquisition du trimestre",
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
          id="beeotels"
          media={{ className: "media", type: "video/mp4", src: `${project.medias[0].src}`, poster: `${project.medias[0].poster}`, alt: `${project.medias[0].alt}`, controls: true, muted: false }}
          description="Animation réalisée pour promouvoir l’installation de ruches en partenariat avec la société Beeodiversity sur plusieurs sites gérés par la SCPI PFO₂."
          softwares={["ae"]}
        />
      )}
      {project && (
        <MediaTile
          id="la-marseillaise"
          media={{ className: "media", type: "video/mp4", src: `${project.medias[1].src}`, poster: `${project.medias[1].poster}`, alt: `${project.medias[1].alt}`, controls: true, muted: true }}
          description="Animation réalisée pour annoncer l’acquisition de la tour « La Marseillaise » pour le compte de fonds gérés par PERIAL AM."
          softwares={["ae"]}
        />
      )}
      {project && (
        <Slider
          id="dans-le-retro"
          medias={[
            { className: "media-slider", src: `${project.medias[2].src}`, alt: `${project.medias[2].alt}` },
            { className: "media-slider", src: `${project.medias[3].src}`, alt: `${project.medias[3].alt}` },
            { className: "media-slider", src: `${project.medias[4].src}`, alt: `${project.medias[4].alt}` },
            { className: "media-slider", src: `${project.medias[5].src}`, alt: `${project.medias[5].alt}` },
          ]}
          description="Carrousel réalisé pour les réseaux sociaux de Perial AM afin de mettre l’accent sur une acquisition marquante de l’année passée."
          softwares={["in"]}
        />
      )}
      {project && (
        <Slider
          id="acquisition-du-trimestre"
          medias={[
            { className: "media-slider", src: `${project.medias[6].src}`, alt: `${project.medias[6].alt}` },
            { className: "media-slider", src: `${project.medias[7].src}`, alt: `${project.medias[7].alt}` },
            { className: "media-slider", src: `${project.medias[8].src}`, alt: `${project.medias[8].alt}` },
            { className: "media-slider", src: `${project.medias[9].src}`, alt: `${project.medias[9].alt}` },
          ]}
          description="Carrousel réalisé pour les réseaux sociaux de Perial AM afin de communiquer sur une acquisition du trimestre révolu."
          softwares={["in"]}
        />
      )}

      <ProjectOutro quote="SEE YOU SPACE COWBOY…" />
    </main>
  );
}
