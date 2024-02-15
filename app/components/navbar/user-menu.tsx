"use client";

import Avatar from "@/app/components/avatar";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((currentValue) => !currentValue);
  }, []);
  // Is useCallback necessary in the above since an empty dependency array is supplied ? ( Answer in the ChatGPT link below) 
  // https://chat.openai.com/share/2c97eed0-fada-49bf-ae27-4fbf3fa212a0  
  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-medium py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Rent your Home
        </div>
        <div
          onClick={() => {}}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
