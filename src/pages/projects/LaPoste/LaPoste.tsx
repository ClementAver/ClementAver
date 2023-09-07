import { useState, useEffect } from "react";
import { projects } from "../../../data/data";
import type { Project } from "../../../types";
import ProjectIntro from "../../../components/ProjectIntro/ProjectIntro";
import ProjectOutro from "../../../components/ProjectOutro/ProjectOutro";
import MediaTile from "../../../components/tiles/MediaTile/MediaTile";
import Slider from "../../../components/Slider/Slider";

export default function LaPoste() {
  const [project, setProject] = useState<Project>();

  const id = "laposte";

  useEffect(() => {
    const project = projects.filter((project) => project.id === id)[0];
    setProject(project);
  }, []);

  return (
    project && (
      <main className="projects">
        <h1 className="sr-only">{project?.title}</h1>
        <ProjectIntro project={project} />

        <MediaTile
          id="Animation"
          media={{ className: "media", type: "video/mp4", src: `${project.medias[0].src}`, poster: `${project.medias[0].poster}`, alt: `${project.medias[0].alt}`, controls: true, muted: true }}
          description="Livrable retraçant les étapes clées du trajet d'une lettre entre l'expéditeur et le destinataire."
          softwares={["ai", "ae"]}
        />

        <Slider
          id="focus-illustrations"
          medias={[
            { className: "media-slider", src: `${project.medias[1].src}`, alt: `${project.medias[1].alt}` },
            { className: "media-slider", src: `${project.medias[2].src}`, alt: `${project.medias[2].alt}` },
          ]}
          noDescription
        />

        <MediaTile
          id="focus-animation"
          media={{ className: "media", type: "video/mp4", src: `${project.medias[3].src}`, poster: `${project.medias[3].poster}`, alt: `${project.medias[3].alt}`, controls: false, muted: true, loop: true, autoPlay: true }}
          noDescription
        />

        <ProjectOutro quote="Fin de transmission" />
      </main>
    )
  );
}

//  <main className="projects">
//       <h1 className="sr-only">{project?.title}</h1>
//       {project && <ProjectIntro project={project} />}

//       {project && (
//         <MediaTile
//           id="Animation"
//           media={{ className: "media", type: "video/mp4", src: `${project.medias[0].src}`, poster: `${project.medias[0].poster}`, alt: `${project.medias[0].alt}`, controls: true, muted: true }}
//           description="Livrable retraçant les étapes clées du trajet d'une lettre entre l'expéditeur et le destinataire."
//           softwares={["ai", "ae"]}
//         />
//       )}
//       {project && (
//         <Slider
//           id="focus-illustrations"
//           medias={[
//             { className: "media-slider", src: `${project.medias[1].src}`, alt: `${project.medias[1].alt}` },
//             { className: "media-slider", src: `${project.medias[2].src}`, alt: `${project.medias[2].alt}` },
//           ]}
//           noDescription
//         />
//       )}
//       {project && (
//         <MediaTile
//           id="focus-animation"
//           media={{ className: "media", type: "video/mp4", src: `${project.medias[3].src}`, poster: `${project.medias[3].poster}`, alt: `${project.medias[3].alt}`, controls: false, muted: true, loop: true, autoPlay: true }}
//           noDescription
//         />
//       )}

//       <ProjectOutro quote="Fin de transmission" />
//     </main>
