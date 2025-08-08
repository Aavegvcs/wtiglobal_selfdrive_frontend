"use client";
import React, { useEffect, useState } from "react";
import NavLogo from "./NavLogo";
import LoginBtn from "./LoginBtn";
import Container from "../Container";
import ChooseCurrency from "./ChooseCurrency";
import CabSelfDriveToggle from "./CabSelfDriveToggle";
import useIsScroll from "@/hooks/useIsScroll";
import { bgColors } from "@/constant/colors";
import { usePathname } from "next/navigation";

const navbarStyle = `flex justify-between items-center py-2`;

const navbarWhiteOnUrlArr: string[] = ["/self-drive-cars" , "/booking-details"];

let bgColor = "bg-primarBgColor";

const Navbar = () => {
  const { isScroll } = useIsScroll();
  const pathName = usePathname();

  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent mismatch by delaying render until client mount
  if (!mounted) return null;

  const isWhiteNavStyle: boolean = isScroll || navbarWhiteOnUrlArr.some((nav) => pathName.startsWith(nav))

  if (isWhiteNavStyle) {
    bgColor = `${bgColors.bgWhite} shadow-[0px_4px_20px_0px_#77777729]`;
  } else {
    bgColor = "bg-transparent";
  }
  return (
    <nav className={`flex justify-between items-center ${bgColor} fixed w- z-50 w-full h-[72px]`}>
      <Container>
        <div className={`${navbarStyle}`}>
          {/* ============== LOGO ============*/}
          <NavLogo isWhiteNavStyle={isWhiteNavStyle} />

          {/*  */}
          <CabSelfDriveToggle isWhiteNavStyle={isWhiteNavStyle} />

          {/*  */}
          <div className="flex gap-2">
            <ChooseCurrency
              isWhiteNavStyle={isWhiteNavStyle}
              onClick={() => { }} />

            {/* ============== LOGIN OR REGISTER BTN */}
            <LoginBtn isWhiteNavStyle={isWhiteNavStyle} onClick={() => { }} />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
