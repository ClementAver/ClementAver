import type { Image } from "../Types";

export default function Image({ src, alt }: Image) {
  const url = () => `https://clementaver.github.io/AgatheBrutt-React/assets/images/${src}`;

  return (
    <img
      src={url()}
      alt={alt}
    />
  );
}
