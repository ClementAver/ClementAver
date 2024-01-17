import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ProjectOutro({ quote }: { quote: string }) {
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

  return (
    <section
      id="outro"
      ref={section}
      className={
        isIntersecting
          ? "container-slide f-h intersecting"
          : "container-slide f-h"
      }
    >
      <div className="container-full-height">
        <div className="outro-content">
          <h2>{quote}</h2>

          <div className="boutons-multiples">
            <Link href="/">Retour à l’accueil</Link>

            <Link href={"#intro"}>Haut de page</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
