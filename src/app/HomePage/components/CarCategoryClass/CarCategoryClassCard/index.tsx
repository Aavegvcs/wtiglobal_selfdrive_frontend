import React from "react";
import CarCategoryText from "@/app/HomePage/components/CarCategoryClass/CarCategoryClassCard/CarCategoryText";
import CarPriceText from "@/app/HomePage/components/CarCategoryClass/CarCategoryClassCard/CarPriceText";
import { textColors } from "@/constant/colors";
import Image from "next/image";

const CarCategoryClassCard = () => {
  return (
    <div className="flex flex-col items-center gap-0 rounded-[20px] p-3  bg-white ">

      <Image
        src={`https://media.cdn-jaguarlandrover.com/api/v2/images/55880/w/680.jpg`}
        className="rounded-[8px] h-[140px] mb-3 w-full"
        alt=""
        width={100}
        height={23}
      />

      <CarCategoryText text="Economy" />
      <p className={`font-normal text-sm ${textColors.lightPurple} py-1.5`}>1240+</p>
      <CarPriceText price="60" />
    </div>
  );
};

export default CarCategoryClassCard;
