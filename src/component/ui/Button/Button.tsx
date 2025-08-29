import { textColors } from "@/constant/colors";
import React from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string,
  padding?: string,
  textSize?: string
  
};

const Button = ({ title, onClick, bgColor, textColor = textColors.textWhite, padding = "p-4", textSize = "text-2xl" }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${bgColor} ${textColor} ${textSize}  font-medium ${padding} rounded-xl cursor-pointer`}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
