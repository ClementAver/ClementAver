import type { MediaTile } from "../../../Types";
import MediaFactory from "../../../factories/MediaFactory";
import Softwares from "../../Softwares/Softwares";

export default function MediaTile({ id, media, description, softwares }: MediaTile) {
  return (
    <section
      className="container-slide"
      id={id}
    >
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
