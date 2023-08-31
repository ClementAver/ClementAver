import { projects } from "../../data/data";

import HomeTile from "../../components/tiles/HomeTile/HomeTile";
import type { Project } from "../../Types";

export default function Home() {
  return (
    <main>
      {projects.map((project: Project, index) => (
        <HomeTile
          key={`HomeTile-${index}`}
          project={project}
        />
      ))}
    </main>
  );
}
