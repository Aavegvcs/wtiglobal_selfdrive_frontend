"use client";
import { bgColors, borderColor, textColors } from "@/constant/colors";
import { RiArrowDropDownLine } from "react-icons/ri";



type ChooseCurrencyProps = {
  onClick: () => void;
  isWhiteNavStyle: boolean
};

const ChooseCurrency = ({ onClick, isWhiteNavStyle }: ChooseCurrencyProps) => {

  const paddingCls = `py-1 px-2 rounded-4px`;
  const colorStyle = `flex flex-col items-start border  ${isWhiteNavStyle ? `${bgColors.bgFogWhite} ${borderColor.borderLightGray}` : `bg-[#FFFFFF1A] backdrop-blur-2xl ${borderColor.borderTransparent}`}`;
  const textStyle = `${isWhiteNavStyle ? `${textColors.lightGray}` : `${textColors.textWhite}`} font-medium text-[12px]`;

  return (
    <button
      className={`${paddingCls} ${colorStyle} ${textStyle}`}
      onClick={onClick}
    >
      <span className={`text-[10px]`}>Choose Currency</span>
      <span className={`flex items-center text-[12px] font-semibold leading-0 ${isWhiteNavStyle && textColors.darkBlack}`}>
        INR
        <RiArrowDropDownLine className="text-xl leading-0" />
      </span>
    </button>
  );
};

export default ChooseCurrency;
