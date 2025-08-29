import { gradientColor, textColors } from "@/constant/colors";
import React from "react";

type BadgeProps = {
  text: string;
  className: string;
};

const bgBadgeGradient = `${gradientColor.inventoryBadgeGradientColor} ${textColors.textWhite}`;

const Badge = ({ text, className = "" }: BadgeProps) => {
  return (
    <span
      className={`${className} ${bgBadgeGradient} rounded-2xl font-semibold text-[12px] tracking-wider`}
    >
      {text}
    </span>
  );
};

export default Badge;
