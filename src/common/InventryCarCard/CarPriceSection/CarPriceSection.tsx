import Badge from "@/component/ui/Badge/Badge";
import { textColors } from "@/constant/colors";
import { Tariff } from "@/types/helper.interface";
import { isEmpty, String } from "lodash";
import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";

type CarPriceSectionProps = {
  tariff_daily: Tariff,
  tariff_monthly: Tariff,
  monthly_discount_percentage: string,
  AppliedPlanPrice: string
};

const CarPriceSection = ({ tariff_monthly, monthly_discount_percentage,  AppliedPlanPrice }: CarPriceSectionProps) => {
  const { base: baseForMonthly } = tariff_monthly || {};





  return (
    <div className="flex flex-col">
      {/* MONTH PRICE */}

      <div className="flex items-start gap-2">

        <PriceLine
          priceVal={`${baseForMonthly} / Month`}
          className={`${textColors.lightBlack} text-[14px]`}
        />
        {monthly_discount_percentage && <Badge text={`${monthly_discount_percentage}`} className="py-0.5 px-2 1 text-[10px] rounded-b-2xl" />}

      </div>


      {/*  DAY PRICE */}
      <PriceLine
        priceVal={AppliedPlanPrice}
        className={`${textColors.lightBlack} text-xl font-semibold`}
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
