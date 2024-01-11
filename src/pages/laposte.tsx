import { useState, useEffect } from "react";
import { projects } from "../data/data";
import type { Project } from "../types";
import ProjectIntro from "@/components/project/ProjectIntro";
import ProjectOutro from "@/components/project/ProjectOutro";
import MediaTile from "@/components/Tiles/MediaTile";
import Slider from "@/components/Slider/Slider";
import NavRight from "@/components/NavRight/NavRight";

export default function LaPoste() {
  const [project, setProject] = useState<Project>();

  const id = "laposte";

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
    <main className="projects">
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
            id: "focus-illustrations",
            name: "Focus illustrations",
          },
          {
            id: "focus-animation",
            name: "Focus animation",
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
          description="Livrable retraçant les étapes clés du trajet d'une lettre entre l'expéditeur et le destinataire."
          softwares={["ai", "ae"]}
        />
      )}
      {project && (
        <Slider
          id="focus-illustrations"
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
          ]}
          noDescription
        />
      )}
      {project && (
        <MediaTile
          id="focus-animation"
          media={{
            className: "media",
            type: "video/mp4",
            src: `${project.medias[3].src}`,
            poster: `${project.medias[3].poster}`,
            alt: `${project.medias[3].alt}`,
            controls: false,
            muted: true,
            loop: true,
            autoPlay: true,
          }}
          noDescription
        />
      )}

      <ProjectOutro quote="Fin de transmission" />
    </main>
  );
}
