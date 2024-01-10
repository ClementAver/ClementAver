import Image from "../models/Image";
import Video from "../models/Video";
import type { Media } from "../types";

export default function MediaFactory({ className, src, type, muted, poster, alt, playsInline, autoPlay, loop, controls }: Media) {
  if (type) {
    return (
      <Video
        src={src}
        type={type}
        alt={alt}
        muted={muted}
        playsInline={playsInline}
        autoPlay={autoPlay}
        loop={loop}
        poster={poster}
        className={className}
        controls={controls}
      />
    );
  } else {
    return (
      <Image
        src={src}
        alt={alt}
        className={className}
      />
    );
  }
}
