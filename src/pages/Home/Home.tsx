import { projects } from "../../data/data";

import HomeTile from "../../components/tiles/HomeTile/HomeTile";
import type { Project } from "../../types";

export default function Home() {
  return (
    <main
      className="home"
      tabIndex={-1}
    >
      {projects.map((project: Project, index) => (
        <HomeTile
          key={`HomeTile-${index}`}
          project={project}
        />
      ))}
    </main>
  );
}
