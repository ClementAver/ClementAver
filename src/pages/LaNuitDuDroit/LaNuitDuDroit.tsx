import { useState, useEffect } from "react";
import { projects } from "../../data/data";

interface Project {
  id: string;
  logo: string;
  title: string;
  tags: string[];
  date: string;
  work: string;
  summary: string;
  covers: { src: string; alt: string }[];
  medias: ({ src: string; type: string; alt?: undefined } | { src: string; alt: string; type?: undefined })[];
}

export default function LaNuitDuDroit() {
  const [project, setProject] = useState<Project>();

  const id = "lanuitdudroit";

  useEffect(() => {
    const project = projects.filter((project) => project.id === id)[0];
    setProject(project);
    console.log(project);
  }, []);

  return <h1>{project?.title}</h1>;
}
