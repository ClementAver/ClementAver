import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import LogoCard from "../LogoCard/LogoCard";
import { projects } from "../../data/data";
import MenuItem from "../MenuItem/MenuItem";
import type { Project } from "../../Types";
import Icon from "../../assets/vectors.js";

export default function NavLeft() {
  const location = useLocation();
  console.log(location.pathname);
  const IconBox = new Icon();
  const [display, setDisplay] = useState(false);

  const navLeft = useRef<HTMLElement>(null);

  const handleClick = () => {
    setDisplay(!display);
    navLeft.current?.classList.toggle("deployed");
  };

  return (
    <>
      <button
        tabIndex={0}
        onClick={handleClick}
        type="button"
        aria-label="Ouvrir/Fermer le menu."
        id="nav-left-btn"
      >
        <div
          id="sgmt-btn-nav-left"
          style={display ? { transform: "rotate(45deg)" } : { transform: "rotate(0deg)" }}
        ></div>
        <div
          id="sgmt-btn-nav-left"
          style={display ? { transform: "rotate(-45deg)" } : { transform: "rotate(0deg)" }}
        ></div>
        <div
          id="sgmt-btn-nav-left"
          style={display ? { transform: "translateY(-5px) scale(0)" } : { transform: "translateY(-5px) scale(1)" }}
        ></div>
        <div
          id="sgmt-btn-nav-left"
          style={display ? { transform: "translateY(5px) scale(0)" } : { transform: "translateY(5px) scale(1)" }}
        ></div>
      </button>
      <nav
        ref={navLeft}
        className="nav-left"
      >
        <LogoCard targetable={!display ? -1 : 0} />
        <ul>
          {projects.map((project: Project) => (
            <MenuItem
              targetable={!display ? -1 : 0}
              key={`MenuItem-${project.id}`}
              id={project.id}
              menu={project.menu}
              path={location.pathname}
            />
          ))}
        </ul>
        <ul>
          <MenuItem
            targetable={!display ? -1 : 0}
            key={"MenuItem-about"}
            id="about"
            menu="&Agrave; propos"
            path={location.pathname}
            icon={IconBox.aPropos()}
          />
          <MenuItem
            targetable={!display ? -1 : 0}
            key={"MenuItem-contact"}
            id="mailto:clement.aver@yahoo.fr"
            menu="Me contacter"
            path={location.pathname}
            icon={IconBox.contact()}
          />
        </ul>
      </nav>
    </>
  );
}
