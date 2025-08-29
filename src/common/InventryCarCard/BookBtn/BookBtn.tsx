import { gradientColor, textColors } from "@/constant/colors";
import React from "react";

type BookBtnProps = {
  text: string;
  vehicle_id: string;
  onClick: (vehicle_id: string) => void
};

const colorBtn = `${gradientColor.primaryGradientColor} ${textColors.textWhite}`;

const BookBtn = ({ text, onClick, vehicle_id }: BookBtnProps) => {
  return <button onClick={() => onClick(vehicle_id)} className={`${colorBtn} py-2 px-6 rounded-xl cursor-pointer`}>{text}</button>;
};

export default BookBtn;
