import { useState, useEffect } from "react";
import { projects } from "../../../data/data";
import type { Project } from "../../../Types";
import ProjectIntro from "../../../components/ProjectIntro/ProjectIntro";

export default function GalerieRobillard() {
  const [project, setProject] = useState<Project>();

  const id = "galerierobillard";

  useEffect(() => {
    const project = projects.filter((project) => project.id === id)[0];
    setProject(project);
    console.log(project);
  }, []);

  return (
    <main className="projects">
      {project && <ProjectIntro project={project} />}
    </main>
  );
}
