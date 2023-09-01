import { useState } from "react";
import MediaFactory from "../../factories/MediaFactory";

import Softwares from "../Softwares/Softwares";
import { Media, Slider } from "../../Types";
import Previous from "../buttons/Previous";
import Next from "../buttons/Next";

export default function Slider({ medias, description, softwares, id }: Slider) {
  const [count, setCount] = useState<number>(0);

  const handlePrevious = () => {
    setCount(count - 1);
  };

  const handleNext = () => {
    setCount(count + 1);
  };

  return (
    <section
      className="container-slide"
      id={id}
    >
      <div className="container-media">
        <div className="slider">
          <Previous onClick={handlePrevious} />
          <Next onClick={handleNext} />
          {medias.map((media: Media, index) => (
            <MediaFactory
              key={index}
              className="media-slider"
              src={media.src}
              alt={media.alt}
            />
          ))}
        </div>

        <div className="media-description">
          <h2>{description}</h2>

          <Softwares softwares={softwares} />
        </div>
      </div>
    </section>
  );
}
