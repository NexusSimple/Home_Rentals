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
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer">
      CategoryBox
    </div>
  );
};

export default CategoryBox;
