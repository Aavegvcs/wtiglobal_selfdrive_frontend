import { textColors } from "@/constant/colors";
import React from "react";

type CarTitleProps = {
  title: string;
};

const CarTitle = ({ title = "" }: CarTitleProps) => {
  return (
    <div className={`flex gap-1.5 text-xl ${textColors.textBlack}`}>
      <h3 className="font-bold ">{title}</h3>
      {/* <span className="font-normal"> or similar</span> */}
    </div>
  );
};

export default CarTitle;
