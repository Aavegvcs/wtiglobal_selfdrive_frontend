import { textColors } from "@/constant/colors";
import React from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  bgColor: string;
};

const Button = ({ title, onClick, bgColor }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${bgColor} ${textColors.textWhite} font-medium text-2xl p-4 rounded-xl`}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
