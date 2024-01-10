export default function SoftwareFactory({ software }: { software: string }) {
  let soft;

  switch (software) {
    case "ae":
      soft = <span className="Ae">After&nbsp;Effects</span>;
      break;
    case "ps":
      soft = <span className="Ps">Photoshop</span>;
      break;
    case "in":
      soft = <span className="In">In&nbsp;Design</span>;
      break;
    case "ai":
      soft = <span className="Ai">Illustrator</span>;
      break;
    case "gh":
      soft = <span className="Gh">Github</span>;
      break;
    case "fi":
      soft = (
        <span className="F-bg">
          <span className="F">Figma</span>
        </span>
      );
      break;
  }

  return soft;
}
