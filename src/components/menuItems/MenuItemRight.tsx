import { Link } from "react-router-dom";
import type { MenuItem } from "../../types";

export default function MenuItem({ id, name, path, icon, targetable }: MenuItem) {
  return (
    <li>
      <Link
        tabIndex={targetable}
        to={id}
        className={path === `/${id}` ? "on-screen" : ""}
        aria-label={`Naviguer vers la page :     ${name}.`}
      >
        {icon && icon}
        {name}
      </Link>
    </li>
  );
}
