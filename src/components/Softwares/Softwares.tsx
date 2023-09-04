import SoftwareFactory from "../../factories/SoftwareFactory";

export default function Softwares({ softwares }: { softwares?: string[] }) {
  return (
    <div className="softwares">
      {softwares?.map((software: string, index) => (
        <SoftwareFactory
          key={index}
          software={software}
        />
      ))}
    </div>
  );
}
