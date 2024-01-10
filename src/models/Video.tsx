import type { Video } from "../types";

export default function Video({ className, poster, src, type, muted, alt, playsInline, autoPlay, loop, controls }: Video) {
  // const url = () => `https://clementaver.github.io/ClementAver/assets/videos/${src}`;
  const url = () => `/assets/videos/${src}`;
  const urlPoster = () => `/assets/posters/${poster}`;

  return (
    <video
      className={className}
      poster={urlPoster()}
      muted={muted}
      playsInline={playsInline}
      autoPlay={autoPlay}
      loop={loop}
      controls={controls}
    >
      <source
        src={url()}
        type={type}
      />
      {alt}
    </video>
  );
}
