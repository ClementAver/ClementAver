import type { Video } from "../Types";

export default function Video({ src, type, muted, poster, alt, playsInline, autoPlay, loop }: Video) {
  // const url = () => `https://clementaver.github.io/ClementAver/assets/videos/${src}`;
  const url = () => `/assets/videos/${src}`;
  const urlPoster = () => `/assets/posters/${poster}`;

  return (
    <video
      className="preview"
      src={url()}
      muted={muted}
      poster={urlPoster()}
      playsInline={playsInline}
      autoPlay={autoPlay}
      loop={loop}
    >
      <source
        src={url()}
        type={type}
      />
      {alt}
    </video>
  );
}
