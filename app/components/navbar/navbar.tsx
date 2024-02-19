"use client";

import Container from "@/app/components/container";
import Logo from "@/app/components/navbar/logo";
import Search from "@/app/components/navbar/search";
import UserMenu from "@/app/components/navbar/user-menu";
import { User } from "@prisma/client";

interface NavbarProps {
  currentUser?: User | null;
}
const Navbar = ({ currentUser }: NavbarProps) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
