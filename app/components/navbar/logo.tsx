"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="130"
      width="130"
      src="/images/logo-transp.svg"
    />
  );
};

export default Logo;
