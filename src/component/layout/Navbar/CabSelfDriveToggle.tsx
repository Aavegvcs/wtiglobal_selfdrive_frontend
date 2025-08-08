const paddingCls = `py-1 px-1 rounded-4px`;
const colorStyle = `flex items-start gap-3 bg-[#FFFFFF1A] backdrop-blur-2xl rounded-[16px]`;
const textStyle = `text-[#FFFFFF] font-normal text-[12px]`;
const selectedBtn = `bg-gradient-to-r from-[#7C93E9] to-[#3D5FDD] rounded-[12px]`;


const groupButtonBgColorWb = `${bgColors.bgFogWhite} ${borderColor.borderLightGrey}  border rounded-xl`
const paddingClsWB = `py-1 px-1 rounded-4px`; // (  WB => FOR WHITE BACKGROUND )



import DividerVertical from "@/component/ui/DividerVertical/DividerVertical";
import { bgColors, borderColor, textColors } from "@/constant/colors";
import React from "react";


type CabSelfDriveToggleProps = {
  isWhiteNavStyle: boolean
}

const CabSelfDriveToggle = ({ isWhiteNavStyle }: CabSelfDriveToggleProps) => {
  return (
    <>

      {/* ================== FOR WHITE BACKGROUND ======================  */}
      {
        isWhiteNavStyle && <div className={`flex text-[14px] ${textColors.lightGrey} ${groupButtonBgColorWb} ${paddingClsWB}`}>
          <button className={`${paddingCls} px-2`}>Cabs</button>
          <DividerVertical color={bgColors.bgDivider} height="h-[28px]" />
          <button className={`px-2 ${textColors.textDarkBlue}`}>Self Drive</button>
        </div>
      }

      {/* ================== FOR TRANSPARENT BACKGROUND ======================  */}
      {
        !isWhiteNavStyle &&
        <div className={`${colorStyle} ${paddingCls} ${textStyle}`}>
          <button className={`${paddingCls} px-2`}>Cabs</button>
          <button className={`${paddingCls} px-2 ${selectedBtn} `}>Self Drive</button>
        </div>
      }
    </>
  );
};

export default CabSelfDriveToggle;
