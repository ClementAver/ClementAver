import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../../../Types";
import MediaFactory from "../../../factories/MediaFactory";
import main from "../../../scss/globals/main.module.scss";

export default function HomeTile({ project }: { key: string; project: Project }) {
  const { id, title, tags, work, summary, cover } = project;

  const description = useRef<HTMLDivElement>(null);
  const link = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const { colorOne, colorTwo } = main;

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (link.current && entry.target.clientHeight < 483) {
          entry.target.setAttribute("style", `background-color: ${colorOne}; color: ${colorTwo}`);
          link.current.style.borderBottom = `1px solid ${colorTwo}`;
        } else if (link.current && entry.target.clientHeight >= 483) {
          entry.target.setAttribute("style", `color: ${colorOne}`);
          link.current.style.borderBottom = `1px solid ${colorOne}`;
        }
      });
    });
    resizeObserver.observe(description.current as HTMLDivElement);
  }, [link]);

  return (
    <section
      className="container-slide"
      id={id}
    >
      <article className="container-projet">
        <MediaFactory
          className="preview"
          src={cover.src}
          type={cover.type}
          alt={cover.alt}
          muted
          playsInline
          autoPlay
          loop
          poster={cover.poster}
        />

        <div
          ref={description}
          className="description"
        >
          <h2>{title}</h2>

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
          </p>

          <p>{work}</p>

          <p>{summary}</p>
          <br />

          <button type="button">
            <Link
              ref={link}
              to={`/${id}`}
            >
              Voir ce projet
            </Link>
          </button>
        </div>
      </article>
    </section>
  );
}
