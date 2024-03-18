"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  description: string;
  selected?: boolean;
}

const CategoryBox = ({
  icon: Icon,
  label,
  description,
  selected,
}: CategoryBoxProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    // Assign the converted searchParams object TO the currentQuery object, if there is searchParams , which is a URLSearchParams type.
    if (searchParams) {
      currentQuery = qs.parse(searchParams.toString());
      // 1st convert the query string of type "ReadOnlyURLSearchParams" into a string
      // 2ndly convert the string into an object.
    }

    // So on clicking the current Category Box, add the label of the clicked category to the "category" search params query in a object called updatedQuery
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    // If the category the user clicks on, has already been selected in the URL, that means we want to delete that category from the searchParams ( i.e. from the newest query i.e. the updatedQuery , which is to be inserted to the URL )
    if (searchParams?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true } // skips key query with null as the value , say Windmills=null, i.e. not selected categories are skipped in the query.
    );

    router.push(url);
  }, [label, router, searchParams]);
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer 
      ${selected ? "border-b-neutral-800" : "border-transparent"}
      ${selected ? "text-neutral-800" : "text-neutral-500"}
      `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
