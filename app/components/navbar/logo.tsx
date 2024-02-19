"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <Image
      alt="logo"
      className="hidden md:block cursor-pointer"
      src="/images/logo-transp.svg"
      priority
      width={130}
      height={130}
    />
  );
};

export default Logo;
