import { useState, useEffect } from "react";
import { projects } from "../../../data/data";
import type { Project } from "../../../types";
import ProjectIntro from "../../../components/ProjectIntro/ProjectIntro";
import ProjectOutro from "../../../components/ProjectOutro/ProjectOutro";
import MediaTile from "../../../components/tiles/MediaTile/MediaTile";
import Slider from "../../../components/Slider/Slider";

export default function FFB() {
  const [project, setProject] = useState<Project>();

  const id = "ffb";

  useEffect(() => {
    const project = projects.filter((project) => project.id === id)[0];
    setProject(project);
  }, []);

  return (
    <main className="projects">
      <h1 className="sr-only">{project?.title}</h1>
      {project && <ProjectIntro project={project} />}

      {project && (
        <MediaTile
          id="photo-d-ensemble"
          media={{ className: "media", src: `${project.medias[0].src}`, alt: `${project.medias[0].alt}` }}
          noDescription
        />
      )}
      {project && (
        <MediaTile
          id="Affiche"
          media={{ className: "media", src: `${project.medias[1].src}`, alt: `${project.medias[1].alt}` }}
          description={"Affiche produite à l'occasion du tournoi de Béhourd de la Citadelle."}
          softwares={["in", "ai", "ps"]}
        />
      )}
      {project && (
        <Slider
          id="details-de-l-affiche"
          medias={[
            { className: "media-slider", src: `${project.medias[2].src}`, alt: `${project.medias[2].alt}` },
            { className: "media-slider", src: `${project.medias[3].src}`, alt: `${project.medias[3].alt}` },
          ]}
          noDescription
        />
      )}
      {project && (
        <Slider
          id="details-de-l-affiche"
          medias={[
            { className: "media-slider", src: `${project.medias[4].src}`, alt: `${project.medias[4].alt}` },
            { className: "media-slider", src: `${project.medias[5].src}`, alt: `${project.medias[5].alt}` },
            { className: "media-slider", src: `${project.medias[6].src}`, alt: `${project.medias[6].alt}` },
            { className: "media-slider", src: `${project.medias[7].src}`, alt: `${project.medias[7].alt}` },
          ]}
          description={"Dépliant introduisant la discipline ainsi que la fédération auprès du public. Distribué durant les tournois."}
          softwares={["in", "ai", "ps"]}
        />
      )}

      <ProjectOutro quote="Fuyez, pauvres fous !" />
    </main>
  );
}
