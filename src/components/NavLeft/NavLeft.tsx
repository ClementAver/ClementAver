import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import LogoCard from "../LogoCard/LogoCard";
import { projects } from "../../data/data";
import MenuItem from "../menuItems/MenuItemLeft.js";
import type { Project } from "../../types.js";
import Icon from "../../assets/vectors.js";

export default function NavLeft() {
  const location = useLocation();
  const IconBox = new Icon();
  const [display, setDisplay] = useState(false);

  const navLeft = useRef<HTMLElement>(null);

  const handleClick = () => {
    setDisplay(!display);
    navLeft.current?.classList.toggle("deployed");
  };

  return (
    <>
      <div
        tabIndex={0}
        onClick={handleClick}
        aria-label="Ouvrir/Fermer le menu."
        id="nav-left-btn"
        role="button"
      >
        <div
          className="sgmt-btn-nav-left"
          style={display ? { transform: "rotate(45deg)" } : { transform: "rotate(0deg)" }}
        ></div>
        <div
          className="sgmt-btn-nav-left"
          style={display ? { transform: "rotate(-45deg)" } : { transform: "rotate(0deg)" }}
        ></div>
        <div
          className="sgmt-btn-nav-left"
          style={display ? { transform: "translateY(-5px) scale(0)" } : { transform: "translateY(-5px) scale(1)" }}
        ></div>
        <div
          className="sgmt-btn-nav-left"
          style={display ? { transform: "translateY(5px) scale(0)" } : { transform: "translateY(5px) scale(1)" }}
        ></div>
      </div>
      <nav
        ref={navLeft}
        className="nav-left"
      >
        <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}></div>
        <LogoCard targetable={!display ? -1 : 0} />
        <ul>
          {projects.map((project: Project) => (
            <MenuItem
              targetable={!display ? -1 : 0}
              key={`MenuItem-${project.id}`}
              id={project.id}
              name={project.name}
              path={location.pathname}
            
            />
          ))}
        </ul>
        <ul>
          <MenuItem
            targetable={!display ? -1 : 0}
            key={"MenuItem-about"}
            id="about"
            name="&Agrave; propos"
            path={location.pathname}
            icon={IconBox.aPropos()}
          
          />
          <MenuItem
            targetable={!display ? -1 : 0}
            key={"MenuItem-contact"}
            id="mailto:clement.aver@yahoo.fr"
            name="Me contacter"
            path={location.pathname}
            icon={IconBox.contact()}
          
          />
        </ul>
        <div style={{ marginBottom: "auto", paddingBottom: "1rem" }}></div>
      </nav>
    </>
  );
}
