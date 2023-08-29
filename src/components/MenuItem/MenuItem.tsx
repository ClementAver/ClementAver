import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
};

export default function MenuItem({ id, title }: Props) {
  return (
    <li>
      <Link to={id}>{title}</Link>
    </li>
  );
}
