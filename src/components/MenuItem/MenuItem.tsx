import { Link } from "react-router-dom";
import type { MenuItem } from "../../types";

export default function MenuItem({ id, menu, path, icon, targetable }: MenuItem) {
  return (
    <li>
      <Link
        tabIndex={targetable}
        to={id}
        className={path === `/${id}` ? "page-active" : ""}
        id={id}
        aria-label={`Naviguer vers la page :     ${menu}.`}
      >
        {icon && icon}
        {menu}
      </Link>
    </li>
  );
}
