import { useState, useEffect } from "react";
import { projects } from "../../../data/data";
import type { Project } from "../../../Types";

export default function LaNuitDuDroit() {
  const [project, setProject] = useState<Project>();

  const id = "lanuitdudroit";

  useEffect(() => {
    const project = projects.filter((project) => project.id === id)[0];
    setProject(project);
    console.log(project);
  }, []);

  return (
    <main>
      <h1>{project?.title}</h1>
    </main>
  );
}
