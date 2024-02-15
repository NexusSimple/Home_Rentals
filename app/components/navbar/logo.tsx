"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="120"
      width="120"
      src="/images/logo-transp.svg"
    />
  );
};

export default Logo;
