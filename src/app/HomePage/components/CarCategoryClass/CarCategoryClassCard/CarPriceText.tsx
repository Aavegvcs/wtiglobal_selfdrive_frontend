import { textColors } from "@/constant/colors";
import React from "react";

type CarPriceTextProps = {
  price: string;
};

const CarPriceText = ({ price }: CarPriceTextProps) => {
  return (
    <p
      className={`text-sm font-medium ${textColors.lightGrey} leading-4 mt-0.5`}
    >{`From AED ${price} / day`}</p>
  );
};

export default CarPriceText;
