import Link from "next/link";
import type { MenuItem } from "../../types";

export default function NavbarItemL({
  id,
  name,
  path,
  icon,
  targetable,
  target,
}: MenuItem) {
  return (
    <li>
      <Link
        tabIndex={targetable}
        {...(target && { target: "_blank" })}
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
