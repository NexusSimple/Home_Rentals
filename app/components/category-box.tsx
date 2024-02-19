import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  description: string;
}

const CategoryBox = ({ icon, label, description }: CategoryBoxProps) => {
  return <div>CategoryBox</div>;
};

export default CategoryBox;
