import CategoryBox from "@/app/components/category-box";
import Container from "@/app/components/container";
import { usePathname, useSearchParams } from "next/navigation";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
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
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
];

const Categories = () => {
  const searchParams = useSearchParams();

  const category = searchParams?.get("category");

  const pathname = usePathname();

  const isHomePage = pathname === "/";

  if (!isHomePage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
