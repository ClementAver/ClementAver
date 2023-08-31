import { Link } from "react-router-dom";
import type { MenuItem } from "../../Types";


export default function MenuItem({ id, menu }: MenuItem) {
  return (
    <li>
      <Link to={id}>{menu}</Link>
    </li>
  );
}
