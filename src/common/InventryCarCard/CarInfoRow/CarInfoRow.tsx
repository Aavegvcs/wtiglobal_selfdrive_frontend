import { textColors } from "@/constant/colors";
import { carCarInfoList } from "@/data/data";
// import Image from "next/image";
import React from "react";

const CarInfoRow = () => {
  return (
    <div className="flex flex-wrap">
      {carCarInfoList.map((item, i) => {
        return (
          <div className="flex gap-0.5 my-0.5 pe-2 items-center" key={i}>
            <img src={item.img} alt="" className="size-[16px]"  />
            <span className={`${textColors.lightBlack} text-sm font-medium`}>
              {item.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CarInfoRow;
