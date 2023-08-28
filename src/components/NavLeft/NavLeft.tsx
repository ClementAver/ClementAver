import { useState } from "react";
import LogoCard from "../LogoCard/LogoCard";

export default function NavLeft() {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <>
      <button onClick={handleClick} type="button" id="nav-left-btn">
        <div id="sgmt-btn-nav-left" style={display ? { transform: "rotate(45deg)" } : { transform: "rotate(0deg)" }}></div>
        <div id="sgmt-btn-nav-left" style={display ? { transform: "rotate(-45deg)" } : { transform: "rotate(0deg)" }}></div>
        <div id="sgmt-btn-nav-left" style={display ? { transform: "translateY(-5px) scale(0)" } : { transform: "translateY(-5px) scale(1)" }}></div>
        <div id="sgmt-btn-nav-left" style={display ? { transform: "translateY(5px) scale(0)" } : { transform: "translateY(5px) scale(1)" }}></div>
      </button>
      <nav className="nav-left" style={display ? { transform: "translateX(0px)" } : { transform: "translateX(-240px)" }}>
        <LogoCard />
      </nav>
    </>
  );
}
