import type { MediaTile } from "../../../types";
import MediaFactory from "../../../factories/MediaFactory";
import Softwares from "../../Softwares/Softwares";

export default function MediaTile({ id, media, description, softwares, noDescription }: MediaTile) {
  return (
    <section
      className="container-slide"
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
