import { useState } from "react";
import MediaFactory from "../../factories/MediaFactory";

import Softwares from "../Softwares/Softwares";
import { Media, Slider } from "../../Types";
import Previous from "../buttons/Previous";
import Next from "../buttons/Next";

export default function Slider({ medias, description, softwares, id }: Slider) {
  const [count, setCount] = useState<number>(0);

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
    console.log(e.key);

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
      className="container-slide"
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
