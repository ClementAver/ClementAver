import { useState, useRef } from "react";
import { useRouter } from "next/router";
import LogoCard from "../LogoCard/LogoCard";
import { projects } from "../../data/data";
import type { Project } from "../../types";
import Icon from "@/utils/Icon";
import NavbarItemL from "../navbarItems/NavbarItemL";

export default function NavLeft({ displayed }: { displayed: boolean }) {
  const router = useRouter();
  const IconBox = new Icon();
  const [display, setDisplay] = useState(displayed);

  const navLeft = useRef<HTMLElement>(null);

  const toggleDisplay = () => {
    setDisplay(!display);
    navLeft.current?.classList.toggle("deployed");
  };

  return (
    <>
      <div
        tabIndex={0}
        onClick={toggleDisplay}
        onKeyDown={(e) => {
          if (e.key === "Enter") toggleDisplay();
        }}
        aria-label="Ouvrir/Fermer le menu."
        id="nav-left-btn"
        role="button"
      >
        <div
          className="sgmt-btn-nav-left"
          style={
            display
              ? { transform: "rotate(45deg)" }
              : { transform: "rotate(0deg)" }
          }
        ></div>
        <div
          className="sgmt-btn-nav-left"
          style={
            display
              ? { transform: "rotate(-45deg)" }
              : { transform: "rotate(0deg)" }
          }
        ></div>
        <div
          className="sgmt-btn-nav-left"
          style={
            display
              ? { transform: "translateY(-5px) scale(0)" }
              : { transform: "translateY(-5px) scale(1)" }
          }
        ></div>
        <div
          className="sgmt-btn-nav-left"
          style={
            display
              ? { transform: "translateY(5px) scale(0)" }
              : { transform: "translateY(5px) scale(1)" }
          }
        ></div>
      </div>
      <nav
        ref={navLeft}
        className="nav-left deployed"
      >
        <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}></div>
        <LogoCard targetable={!display ? -1 : 0} />
        <ul>
          {projects.map((project: Project) => (
            <NavbarItemL
              targetable={!display ? -1 : 0}
              key={`MenuItem-${project.id}`}
              id={project.id}
              name={project.name}
              path={router.pathname}
            />
          ))}
        </ul>
        <ul>
          <NavbarItemL
            targetable={!display ? -1 : 0}
            key={"MenuItem-about"}
            id="about"
            name="&Agrave; propos"
            path={router.pathname}
            icon={IconBox.aPropos("left-nav-picto")}
          />
          <NavbarItemL
            targetable={!display ? -1 : 0}
            key={"MenuItem-linkedin"}
            id="https://www.linkedin.com/in/cl%C3%A9ment-aver-3aa9771b4/"
            name="LinkedIn"
            path={router.pathname}
            icon={IconBox.linkedin("left-nav-picto")}
            target
          />
          <NavbarItemL
            targetable={!display ? -1 : 0}
            key={"MenuItem-github"}
            id="https://github.com/ClementAver"
            name="Github"
            path={router.pathname}
            icon={IconBox.github("left-nav-picto")}
            target
          />
          <NavbarItemL
            targetable={!display ? -1 : 0}
            key={"MenuItem-contact"}
            id="mailto:clement.aver@yahoo.fr"
            name="Me contacter"
            path={router.pathname}
            icon={IconBox.contact("left-nav-picto")}
          />
        </ul>
        <div style={{ marginBottom: "auto", paddingBottom: "1rem" }}></div>
      </nav>
    </>
  );
}
