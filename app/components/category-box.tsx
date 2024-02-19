import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  description: string;
  selected?: boolean;
}

const CategoryBox = ({
  icon,
  label,
  description,
  selected,
}: CategoryBoxProps) => {
  return <div>CategoryBox</div>;
};

export default CategoryBox;
