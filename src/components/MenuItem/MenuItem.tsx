import { Link } from "react-router-dom";
import type { MenuItem } from "../../Types";

export default function MenuItem({ id, menu, path, icon, targetable }: MenuItem) {
  return (
    <li>
      <Link
        tabIndex={targetable}
        to={id}
        id={path === `/${id}` ? "page-active" : ""}
        aria-label={`Naviguer vers la page :     ${menu}.`}
      >
        {icon && icon}
        {menu}
      </Link>
    </li>
  );
}
