import React from "react";
import WtiWhiteLogo from "@/assets/icons/wti_white_logo.svg";
import WtiBlueLogo from "@/assets/icons/wti_blue_logo.svg";
import Image from "next/image";
import Link from "next/link";

type NavLogoProps = {
  isWhiteNavStyle: boolean
}

const NavLogo = ({ isWhiteNavStyle }: NavLogoProps) => {
  return (<Link href="/">
    <Image src={isWhiteNavStyle ? WtiBlueLogo : WtiWhiteLogo} alt="" width={120} />
  </Link>);
};

export default NavLogo;
