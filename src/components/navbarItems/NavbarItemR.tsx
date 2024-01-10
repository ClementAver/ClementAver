import Link from "next/link";
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

    function handleIntersectionKeydown() {
      const interval = setInterval(handleIntersection);

      function stopInterval() {
        clearInterval(interval);
      }
      setTimeout(stopInterval, 300);
    }
    handleIntersectionKeydown();

    main[0].addEventListener("scroll", handleIntersection);
    document.addEventListener("keydown", handleIntersectionKeydown);
    return () => {
      main[0].removeEventListener("scroll", handleIntersection);
      document.removeEventListener("keydown", handleIntersectionKeydown);
    };
  }, [id]);

  return (
    <li>
      <Link
        tabIndex={targetable}
        href={path}
        className={onScreen ? "on-screen" : ""}
        aria-label={`Naviguer vers le chapitre : ${name}.`}
      >
        {name}
      </Link>
    </li>
  );
}
