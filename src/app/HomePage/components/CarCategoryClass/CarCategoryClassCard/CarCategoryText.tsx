import { textColors } from "@/constant/colors";
import React from "react";

type CarCategoryTextProps = {
  text: string;
};

const CarCategoryText = ({ text }: CarCategoryTextProps) => {
  return <h4 className={`${textColors.lightBlack} font-semibold text-xl`}>{text}</h4>;
};

export default CarCategoryText;
