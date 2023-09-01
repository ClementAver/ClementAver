import { Link } from "react-router-dom";
import type { MenuItem } from "../../Types";

export default function MenuItem({ id, menu, path, icon }: MenuItem) {
  return (
    <li>
      <Link
        to={id}
        id={path === `/${id}` ? "page-active" : ""}
      >
        {icon && icon}
        {menu}
      </Link>
    </li>
  );
}
