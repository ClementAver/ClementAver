import SoftwareFactory from "../../factories/SoftwareFactory";

export default function Softwares({ softwares }: { softwares: [] }) {
  return softwares.map((software: string, index) => (
    <SoftwareFactory
      key={index}
      software={software}
    />
  ));
}
