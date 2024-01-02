import { projects } from "../../data/data";

import HomeTile from "../../components/tiles/HomeTile/HomeTile";
import type { Project } from "../../types";
import { Link } from "react-router-dom";
import Softwares from "../../components/Softwares/Softwares.js";

export default function Home() {
  return (
    <main
      className="home"
      tabIndex={-1}
    >
      <section className="container-slide">
        <div className="intro">
          <h1>Bonjour, et&nbsp;bienvenue.</h1>
          <p>
            Ce site est une fenêtre vers différentes réalisations de design
            graphique et motion de mon fait. Il témoigne de ma pratique et peut
            vous donner une idée de mon travail dans ces domaines.
          </p>
          <p>
            En reconversion,
            <br />
            <span className="bold">
              je cherche actuellement un poste de développeur web
            </span>
            .
            <br />
            Pour consulter mes projets de développement,
          </p>
          <p>
            ça se passe sur{" "}
            <Link to="https://github.com/ClementAver">
              <Softwares softwares={["gh"]} />
            </Link>
            .
          </p>

          <p className="scale">↓</p>
        </div>
      </section>

      {projects.map((project: Project, index) => (
        <HomeTile
          key={`HomeTile-${index}`}
          project={project}
        />
      ))}
    </main>
  );
}
