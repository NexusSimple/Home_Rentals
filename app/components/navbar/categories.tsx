import Container from "@/app/components/container";
import { TbBeach } from "react-icons/tb";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
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
