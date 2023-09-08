import { Link } from "react-router-dom";
import type { MenuItem } from "../../types";
import { useEffect, useState } from "react";

export default function MenuItem({ id, name, path, targetable }: MenuItem) {
  const [onScreen, setOnScreen] = useState<boolean>(false);

  useEffect(() => {
    const main = document.getElementsByTagName("main");

    function handleIntersection() {
      const elementIntersecting = document.querySelector(".intersecting");

      if (main && elementIntersecting?.id === id) setOnScreen(true);
      else setOnScreen(false);
    }

    function hanldeIntersectionWithTimer() {
      setTimeout(handleIntersection, 300);
    }
    hanldeIntersectionWithTimer();

    main[0].addEventListener("scroll", handleIntersection);
    document.addEventListener("keydown", hanldeIntersectionWithTimer);
    return () => {
      main[0].removeEventListener("scroll", handleIntersection);
      document.removeEventListener("keydown", hanldeIntersectionWithTimer);
    };
  }, [id]);

  return (
    <li>
      <Link
        tabIndex={targetable}
        to={path}
        className={onScreen ? "on-screen" : ""}
        aria-label={`Naviguer vers le chapitre : ${name}.`}
      >
        {name}
      </Link>
    </li>
  );
}
