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
// import { antdModalStyleOverRide } from "./style";
import AuthModal from "@/component/AuthModal";
import { authModalState } from "@/state/authModalStore/authModalStore";
import { Box, Modal } from "@mui/material";
import { style } from "@/app/(routes)/booking-details/[bookingDetailsQuery]/style";
import { useSelectCurrencyModal } from "@/state/useSelectCurrencyModal";
import ChooseCurrencyModal from "@/component/ChooseCurrencyModal";

const navbarStyle = `flex justify-between items-center py-2`;

const navbarWhiteOnUrlArr: (string | RegExp)[] = ["/self-drive-cars", "/booking-details", "/my-booking", "/my-profile", /^\/[^/]+\/[^/]+(?:\/.*)?$/];

let bgColor = "bg-primarBgColor";

const Navbar = () => {
  const { isScroll } = useIsScroll();
  const pathName = usePathname();

  const isModalOpen = authModalState((store) => store.isModalOpen)
  const openAuthModalAction = authModalState((store) => store.openAuthModalAction)
  const closeAuthModalAction = authModalState((store) => store.closeAuthModalAction)

  const isCurrencyModalOpen = useSelectCurrencyModal((store) => store.isCurrencyModalOpen)
  const openCurrencyModalAction = useSelectCurrencyModal((store) => store.openCurrencyModalAction)
  const closeCurrencyModalAction = useSelectCurrencyModal((store) => store.closeCurrencyModalAction)


  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent mismatch by delaying render until client mount
  if (!mounted) return null;

  const isWhiteNavStyle: boolean = isScroll || navbarWhiteOnUrlArr.some((route) =>
    route instanceof RegExp ? route.test(pathName) : pathName.startsWith(route));

  if (isWhiteNavStyle) {
    bgColor = `${bgColors.bgWhite} shadow-[0px_4px_20px_0px_#77777729]`;
  } else {
    bgColor = "bg-transparent";
  }
















  return (
    <nav className={`flex justify-between items-center ${bgColor} fixed w- z-[999] w-full h-[72px]`}>
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
              onClick={openCurrencyModalAction} />
            {/* ============== LOGIN OR REGISTER BTN */}
            <LoginBtn isWhiteNavStyle={isWhiteNavStyle} onClick={openAuthModalAction} />
          </div>
        </div>
      </Container>


      {/* =========================== CURRENCY MODAL ========================= */}
      <Modal open={isCurrencyModalOpen} onClose={closeCurrencyModalAction}>
        <Box sx={{ ...style, width: 800, borderRadius :4 }}>
          <ChooseCurrencyModal />
        </Box>
      </Modal>

      {/* =========================== AUTH MODAL ========================= */}
      <Modal open={isModalOpen} onClose={closeAuthModalAction}>
        <Box sx={{ ...style, width: 800 }}>
          <AuthModal />
        </Box>
      </Modal>
    </nav>
  );
};

export default Navbar;
