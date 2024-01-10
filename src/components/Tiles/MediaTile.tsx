import { useEffect, useRef, useState } from "react";
import type { MediaTile } from "../../types";
import MediaFactory from "../../factories/MediaFactory";
import Softwares from "../Softwares/Softwares";

export default function MediaTile({ id, media, description, softwares, noDescription }: MediaTile) {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const section = useRef<HTMLDivElement | null>(null);

  function handleIntersecting(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    setIsIntersecting(entry.isIntersecting);
  }

  useEffect(() => {
    const refCopy = section.current;

    const observer = new IntersectionObserver(handleIntersecting, { root: null, rootMargin: "0px", threshold: 0.6 });
    if (section.current) observer.observe(section.current);

    return () => {
      if (refCopy) observer.unobserve(refCopy);
    };
  }, [section]);

  return (
    <section
      ref={section}
      className={isIntersecting ? "container-slide intersecting" : "container-slide"}
      id={id}
    >
      {description && noDescription && <h2 className="sr-only">{description}</h2>}
      <div className="container-media">
        <MediaFactory
          src={media.src}
          type={media.type}
          alt={media.alt}
          muted={media.muted}
          playsInline={media.playsInline}
          autoPlay={media.autoPlay}
          loop={media.loop}
          poster={media.poster}
          className={media.className}
          controls={media.controls}
        />
        {description && !noDescription && (
          <div className="media-description">
            <h2>{description}</h2>

            <Softwares softwares={softwares} />
          </div>
        )}
      </div>
    </section>
  );
}
