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
      priority
      style={{ width: "130px", height: "130px" }}
    />
  );
};

export default Logo;
