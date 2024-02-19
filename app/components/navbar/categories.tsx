import Container from "@/app/components/container";
import { GiWindmill } from "react-icons/gi";
import { TbBeach } from "react-icons/tb";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills!",
  },
];

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto"></div>
    </Container>
  );
};

export default Categories;
