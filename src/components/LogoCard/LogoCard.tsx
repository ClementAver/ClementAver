import { useEffect, useRef } from "react";
import Link from "next/link";
export default function LogoCard({ targetable }: { targetable: number }) {
  const addDring = () => {
    logo.current?.classList.add("dring");
  };

  const removeDring = () => {
    logo.current?.classList.remove("dring");
  };
  useEffect(() => {}, []);

  const logo = useRef<SVGSVGElement>(null);

  return (
    <Link
      tabIndex={targetable}
      onMouseOver={addDring}
      onMouseOut={removeDring}
      id="container-logo"
      href="/"
      aria-label="Naviguer vers la page d'accueil."
    >
      <svg
        ref={logo}
        id="picto-logo"
        viewBox="0 0 30.96 30.96"
      >
        <g>
          <path d="M8.43,24v1l-1-1V23h1Zm12,0h-3l-1,1h-2l-1-1h-3V23l1-1V21l1,1,1,1,1,1,1-1-1-1V21h2v1l-1,1,1,1,1-1,1-1,1-1v1l1,1Zm-7-6V17l1,1-1,1h-2l-1-1,1-1h1v1Zm6,1h-2l-1-1,1-1h1v1h1V17l1,1Zm4,5-1,1V23h1Zm1-1V22l-1-1-1-1V9l-1,1v1l-1,1v2l1,1h-1l-1-1V13l1-1V11l1-1V9l1-1V7l-1,1-1,1-1,1-1,1-1,1-1,1h-2l-1-1-1-1-1-1-1-1-1-1-1-1V8l1,1v1l1,1v1l1,1v1l-1,1h-1l1-1V12l-1-1V10l-1-1V20l-1,1-1,1v1l-1-1,1-1,1-1V16l1-1-1-1V7l1-1,1,1,1,1,1,1,1,1,1,1,1,1h2l1-1,1-1,1-1,1-1,1-1,1-1,1,1v7l-1,1,1,1v4l1,1,1,1Z" />
        </g>
      </svg>
      <p id="text-logo">Clément Aver</p>
    </Link>
  );
}
