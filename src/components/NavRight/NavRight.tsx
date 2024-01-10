import { useState } from "react";
import { useRouter } from "next/router";
import NavbarItemR from "../navbarItems/NavbarItemR";
import { useEffect } from "react";

export default function NavRight({
  sections,
}: {
  sections: { id: string; name: string }[];
}) {
  const router = useRouter();

  const [winWidth, setWinWidth] = useState<number>();

  useEffect(() => {
    function handleResize() {
      setWinWidth(window.innerWidth);
    }

    setWinWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-nav-right">
      <ul>
        {sections.map((section) => (
          <NavbarItemR
            targetable={winWidth && winWidth >= 1846 ? 0 : -1}
            key={`MenuItem-${section.id}`}
            id={section.id}
            name={section.name}
            path={router.basePath + `#${section.id}`}
          />
        ))}
      </ul>
    </div>
  );
}
