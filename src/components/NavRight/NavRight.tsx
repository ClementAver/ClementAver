import { useLocation } from "react-router-dom";
import MenuItem from "../menuItems/MenuItemRight";

export default function NavRight({ sections }: { sections: { id: string; name: string }[] }) {
  const location = useLocation();

  return (
    <div className="container-nav-right">
      <ul>
        {sections.map((section) => (
          <MenuItem
            // targetable={!display ? -1 : 0}
            key={`MenuItem-${section.id}`}
            id={location.pathname + `#${section.id}`}
            name={section.name}
            path={location.pathname + location.hash}
          />
        ))}
      </ul>
    </div>
  );
}
