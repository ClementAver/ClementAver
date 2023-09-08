import { useState } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "../menuItems/MenuItemRight";
import { useEffect } from "react";

export default function NavRight({ sections }: { sections: { id: string; name: string }[] }) {
  const location = useLocation();

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
          <MenuItem
            targetable={winWidth && winWidth >= 1846 ? 0 : -1}
            key={`MenuItem-${section.id}`}
            id={section.id}
            name={section.name}
            path={location.pathname + `#${section.id}`}
          />
        ))}
      </ul>
    </div>
  );
}
