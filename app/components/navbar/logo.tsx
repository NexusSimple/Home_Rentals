"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
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
