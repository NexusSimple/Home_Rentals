"use client";

import Container from "@/app/components/container";
import Logo from "@/app/components/navbar/logo";
import Search from "@/app/components/navbar/search";
import UserMenu from "@/app/components/navbar/user-menu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
