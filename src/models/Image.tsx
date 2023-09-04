import type { Image } from "../Types";

export default function Image({ src, alt, className }: Image) {
  const url = () => `/assets/images/${src}`;

  return (
    <img
      src={url()}
      alt={alt}
      className={className}
    />
  );
}
