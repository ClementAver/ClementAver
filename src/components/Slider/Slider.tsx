import { useState, useEffect, useRef } from "react";
import MediaFactory from "../../factories/MediaFactory";

import Softwares from "../Softwares/Softwares";
import { Media, Slider } from "../../types";
import Previous from "../buttons/Previous";
import Next from "../buttons/Next";

export default function Slider({ medias, description, softwares, id }: Slider) {
  const [count, setCount] = useState<number>(0);
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

  const handlePrevious = () => {
    count > 0 ? setCount(count - 1) : setCount(medias.length - 1);
  };

  const handleNext = () => {
    count < medias.length - 1 ? setCount(count + 1) : setCount(0);
  };

  const handleClass = (index: number) => {
    if (index === count) {
      return "media-slider media-slider-active";
    } else if (index !== count) {
      return "media-slider";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    switch (e.key) {
      case "ArrowLeft":
        handlePrevious();
        break;
      case "ArrowRight":
        handleNext();
    }
  };

  return (
    <section
      ref={section}
      className={
        isIntersecting ? "container-slide intersecting" : "container-slide"
      }
      id={id}
    >
      <div
        tabIndex={0}
        onKeyDown={(e) => handleKeyDown(e)}
        className="container-media"
      >
        <div className="slider">
          <div className="compteur">{`${count + 1} · ${medias.length}`}</div>
          <Previous onClick={handlePrevious} />
          <Next onClick={handleNext} />
          {medias.map((media: Media, index) => (
            <MediaFactory
              key={index}
              className={handleClass(index)}
              src={media.src}
              alt={media.alt}
            />
          ))}
        </div>

        {description && (
          <div className="media-description">
            <h2>{description}</h2>

            <Softwares softwares={softwares} />
          </div>
        )}
      </div>
    </section>
  );
}
