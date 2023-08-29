import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoCard from "../LogoCard/LogoCard";
import { projects } from "../../data/data";
import MenuItem from "../MenuItem/MenuItem";
// import type { Project } from "./NavLeft";

export default function NavLeft() {
  const [display, setDisplay] = useState(false);

  const button = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    console.log(button.current?.children);
  }, []);

  interface Project {
    id: string;
    logo: string;
    title: string;
    tags: string[];
    date: string;
    work: string;
    summary: string;
    covers: { src: string; alt: string }[];
    medias: ({ src: string; type: string; alt?: undefined } | { src: string; alt: string; type?: undefined })[];
  }

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
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
        className="nav-left"
        style={display ? { transform: "translateX(0px)", boxShadow: "2px 0 4px rgba(0, 0, 0, 0.25)" } : { transform: "translateX(-240px)" }}
      >
        <LogoCard />
        <ul>
          {projects.map((project: Project) => (
            <MenuItem
              key={project.id}
              id={project.id}
              title={project.title}
            />
          ))}
        </ul>
        <ul>
          <li>
            <Link to="/about">
              <svg
                className="left-nav-picto"
                viewBox="0 0 26.5 22.41"
              >
                <g>
                  <path d="M13.25,14.83a9.83,9.83,0,0,1,9.56,7.58,13.25,13.25,0,1,0-19.12,0A9.83,9.83,0,0,1,13.25,14.83ZM13.25,4A4.92,4.92,0,1,1,8.33,8.92,4.92,4.92,0,0,1,13.25,4Z" />
                </g>
              </svg>
              &Agrave; propos
            </Link>
          </li>
          <li>
            <a href="mailto:clement.aver@yahoo.fr">
              <svg
                className="left-nav-picto"
                viewBox="0 0 153.11 118.71"
              >
                <g>
                  <path d="M0,66.22l42.49,9.65,7.79,42.84L77.63,87.85l25.48,13L153.11,0ZM55.11,78.67,52,104.94,47.11,74.22,153.11,0Z" />
                </g>
              </svg>
              Me contacter
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
