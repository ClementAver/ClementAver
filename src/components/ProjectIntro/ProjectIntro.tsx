import type { Project } from "../../types";

export default function ProjectIntro({ project }: { project: Project }) {
  const { title, tags, date, work, summary, logo } = project;

  const logoUrl = `/assets/logos/${logo.src}`;
  const logoAlt = `Logo de la ${logo.alt}`;

  return (
    <section
      id="intro"
      className="container-slide f-h"
    >
      <h2 className="sr-only">{title}</h2>
      <article className="container-full-height">
        <img
          className="logo-projet"
          src={logoUrl}
          alt={logoAlt}
        />

        <h2 className="main-title">{title}</h2>
        <span className="rubriquage">
          {tags.map((tag, index) => {
            const key = `tag-${index}`;
            if (index !== 0) {
              return <span key={key}>, {tag}</span>;
            }
            return <span key={key}>{tag}</span>;
          })}
          <span>{`, ${date}`}</span>
        </span>

        <p>{work}</p>
        <p>•</p>
        <p>{summary}</p>
        <br />

        <p className="scale">↓</p>
      </article>
    </section>
  );
}
