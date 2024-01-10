import Link from "next/link";
import type { MenuItem } from "../../types";

export default function NavbarItemL({
  id,
  name,
  path,
  icon,
  targetable,
}: MenuItem) {
  return (
    <li>
      <Link
        tabIndex={targetable}
        href={id}
        className={path === `/${id}` ? "page-active" : ""}
        aria-label={`Naviguer vers la page : ${name}.`}
      >
        {icon && icon}
        {name}
      </Link>
    </li>
  );
}
