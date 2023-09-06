import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Image } from "../types";

export default function Image({ src, alt, className }: Image) {
  const url = () => `/assets/images/${src}`;

  const [showModal, setShowModal] = useState(false);

  function handleOpen() {
    // Deletes any modal alredy displayed.
    const modales = document.querySelectorAll(".modal");
    modales.forEach((modale) => modale.remove());

    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleClose();
      }
    }

    window.addEventListener("keydown", handleEscape);

    // Removes the listener when the component is dismounted.
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <img
        className={className}
        src={url()}
        alt={alt}
        tabIndex={0}
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleOpen();
        }}
      />

      {showModal &&
        createPortal(
          <div
            className="modal"
            onClick={handleClose}
          >
            <img
              onClick={(e) => {
                e.stopPropagation();
              }}
              src={url()}
              alt={alt}
              className="modal__media"
            />
          </div>,
          document.body
        )}
    </>
  );
}
