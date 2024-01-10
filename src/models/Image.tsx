import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Img } from "../types";

export default function Img({ src, alt, className }: Img) {
  const url = () => `/assets/images/${src}`;

  return (
    <>
      <img
        className={className}
        src={url()}
        alt={alt}
        tabIndex={0}
      />
    </>
  );
}
