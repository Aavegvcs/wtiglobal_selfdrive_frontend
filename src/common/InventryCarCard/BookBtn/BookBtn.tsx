import { gradientColor, textColors } from "@/constant/colors";
import React from "react";

type BookBtnProps = {
  text: string;
};

const colorBtn = `${gradientColor.primaryGradientColor} ${textColors.textWhite}`;

const BookBtn = ({ text }: BookBtnProps) => {
  return <button className={`${colorBtn} py-2 px-6 rounded-xl cursor-pointer`}>{text}</button>;
};

export default BookBtn;
