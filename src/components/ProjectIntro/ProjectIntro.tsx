import type { Project } from "../../Types";

export default function ProjectIntro({ project }: { project: Project }) {
  const { title, tags, date, work, summary, logo } = project;

  const logoUrl = `/assets/logos/${logo.src}`;
  const logoAlt = `Logo de la ${logo.alt}`;

  return (
    <section
      id="intro"
      className="container-slide"
    >
      <article className="container-full-height">
        <img
          className="logo-projet"
          src={logoUrl}
          alt={logoAlt}
        />

        <h1>{title}</h1>

        <p className="rubriquage">
          {tags.map((tag, index) => {
            const key = `tag-${index}`;
            if (index !== 0) {
              return (
                <span
                  className="rubriquage"
                  key={key}
                >
                  , {tag}
                </span>
              );
            }
            return (
              <span
                className="rubriquage"
                key={key}
              >
                {tag}
              </span>
            );
          })}
          {`, ${date}`}
        </p>

        <p>{work}</p>
        <p>•</p>
        <p>{summary}</p>
        <br />

        <p className="scale">↓</p>
      </article>
    </section>
  );
}
