import { gradientColor } from "@/constant/colors";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const loginGtnCls = `p-2 rounded-4px`;
const colorStyle = `flex gap-2 items-center font-normal text-[12px] text-[#FFFFFF]`;
// let bgColorBtn = "bg-[#78AEFF]";

type LoginBtnProps = {
  onClick: () => void;
  isWhiteNavStyle: boolean;
};

const LoginBtn = ({ isWhiteNavStyle, onClick }: LoginBtnProps) => {
   const bgColorBtn = isWhiteNavStyle ? gradientColor.primaryGradientColor : "bg-[#78AEFF]";
  return (
    <button
      onClick={onClick}
      className={`${bgColorBtn} ${loginGtnCls} ${colorStyle} cursor-pointer`}
    >
      Login or Register
      <RiArrowDropDownLine className="text-2xl" />
    </button>
  );
};

export default LoginBtn;
