import { textColors } from "@/constant/colors";
import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";

// type CarPriceSectionProps = {};

const CarPriceSection = () => {
  return (
    <div className="flex flex-col">
      {/* CROSS PRICE */}
      <PriceLine
        priceVal="234"
        className={`${textColors.lightGrey} text-[14px] line-through`}
      />
      {/* CROSS PRICE */}
      <PriceLine
        priceVal="234/day"
        className={`${textColors.lightBlack} text-xl font-semibold`}
      />
      {/* CROSS PRICE */}
      <PriceLine
        preText="Total - "
        priceVal="234"
        className={`${textColors.lightGrey} font-medium text-[12px]`}
      />
    </div>
  );
};

export default CarPriceSection;

const PriceLine = ({
  preText,
  priceVal,
  className,
}: {
  preText?: string;
  priceVal: string | number;
  className: string;
}) => {
  return (
    <div className={`flex gap-0.5 items-center ${className}`}>
      {preText && <span className="font-medium">{preText}</span>}
      <FaIndianRupeeSign />
      <span>{priceVal}</span>
    </div>
  );
};
