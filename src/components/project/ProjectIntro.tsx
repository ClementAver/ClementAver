import { useState, useEffect, useRef } from "react";
import type { Project } from "../../types";
import Image from "next/image";

export default function ProjectIntro({ project }: { project: Project }) {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const section = useRef<HTMLDivElement | null>(null);

  function handleIntersecting(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    setIsIntersecting(entry.isIntersecting);
  }

  useEffect(() => {
    const refCopy = section.current;

    const observer = new IntersectionObserver(handleIntersecting, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });
    if (section.current) observer.observe(section.current);

    return () => {
      if (refCopy) observer.unobserve(refCopy);
    };
  }, [section]);

  const { title, tags, date, work, summary, logo } = project;

  const logoUrl = `/assets/logos/${logo.src}`;
  const logoAlt = `Logo de la ${logo.alt}`;

  return (
    <section
      id="intro"
      ref={section}
      className={
        isIntersecting
          ? "container-slide f-h intersecting"
          : "container-slide f-h"
      }
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
