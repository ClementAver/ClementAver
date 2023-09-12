import { useState, useEffect } from "react";
import { projects } from "../../../data/data";
import type { Project } from "../../../types";
import ProjectIntro from "../../../components/ProjectIntro/ProjectIntro";
import ProjectOutro from "../../../components/ProjectOutro/ProjectOutro";
import MediaTile from "../../../components/tiles/MediaTile/MediaTile";

export default function LaNuitDuDroit() {
  const [project, setProject] = useState<Project>();

  const id = "lanuitdudroit";

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
      {project && <ProjectIntro project={project} />}

      {project && (
        <MediaTile
          id="presentation-du-site"
          media={{ className: "media", type: "video/mp4", src: `${project.medias[0].src}`, poster: `${project.medias[0].poster}`, alt: `${project.medias[0].alt}`, controls: true, muted: false }}
          description="Série de gifs réalisée par régions afin de communiquer sur les évènements des différents territoires."
          softwares={["ae"]}
        />
      )}
      {project && (
        <MediaTile
          id="animation-de-l-evenement"
          media={{ className: "media", src: `${project.medias[1].src}`, alt: `${project.medias[1].alt}` }}
          description="Série de gifs réalisée par régions afin de communiquer sur les évènements des différents territoires."
          softwares={["fi", "ps"]}
        />
      )}
      {project && (
        <MediaTile
          id="animation-de-l-evenement"
          media={{ className: "media", src: `${project.medias[2].src}`, alt: `${project.medias[2].alt}` }}
          description="Série de gifs réalisée pour promouvoir les principaux évènements de La Nuit du Droit."
          softwares={["fi", "ps"]}
        />
      )}
      <ProjectOutro quote="Et ils vécurent heureux." />
    </main>
  );
}
