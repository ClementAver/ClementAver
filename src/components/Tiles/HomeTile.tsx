import { useEffect, useRef } from "react";
import Link from "next/link";
import type { Project } from "../../types";
import MediaFactory from "../../factories/MediaFactory";
import main from "../../styles/globals/main.module.scss";

export default function HomeTile({
  project,
}: {
  key: string;
  project: Project;
}) {
  const { id, title, tags, work, summary, cover } = project;

  const description = useRef<HTMLDivElement>(null);
  const link = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const { colorOne, colorTwo, colorFour, colorSix } = main;

    function onMouseOver() {
      if (link.current) link.current.style.backgroundColor = colorFour;
    }
    function onMouseDown() {
      if (link.current) link.current.style.backgroundColor = colorSix;
    }
    function onMouseOut() {
      if (link.current) link.current.style.backgroundColor = "";
    }

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (link.current && entry.target.clientHeight < 481) {
          entry.target.setAttribute(
            "style",
            `background-color: ${colorOne}; color: ${colorTwo}`
          );

          link.current.style.borderBottom = `1px solid ${colorTwo}`;

          link.current.addEventListener("mouseover", onMouseOver);
          link.current.addEventListener("mousedown", onMouseDown);
          link.current.addEventListener("mouseout", onMouseOut);
        } else if (link.current && entry.target.clientHeight >= 480) {
          entry.target.setAttribute("style", `color: ${colorOne}`);

          link.current.style.borderBottom = "";

          link.current.removeEventListener("mouseover", onMouseOver);
          link.current.removeEventListener("mousedown", onMouseDown);
          link.current.removeEventListener("mouseout", onMouseOut);
        }
      });
    });

    if (description.current) {
      resizeObserver.observe(description.current);
    }

    return () => {
      /* 
        Clean up the ResizeObserver when the component unmounts.
        Helps keeping only one observer at a time for each eventType on the button, when it is needed. 
      */
      resizeObserver.disconnect();
    };
  }, []);

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

          <span className="rubriquage">
            {tags.map((tag: string, index: number) => {
              const key = `tag-${index}`;
              if (index !== 0) {
                return <span key={key}>, {tag}</span>;
              }
              return <span key={key}>{tag}</span>;
            })}
          </span>
          <p className="truncate">{work}</p>
          <p className="truncate">{summary}</p>
          <button
            type="button"
            draggable="false"
            tabIndex={-1}
          >
            <Link
              ref={link}
              href={`/${id}`}
              draggable="false"
            >
              Voir ce projet
            </Link>
          </button>
        </div>
      </article>
    </section>
  );
}
