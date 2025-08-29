import React from "react";
import CarImages from "@/common/InventryCarCard/CarImages/CarImages";
import Badge from "@/component/ui/Badge/Badge";
import { bgColors } from "@/constant/colors";
import CarTitle from "@/common/InventryCarCard/CarTitle/CarTitle";
import CarRating from "@/common/InventryCarCard/CarRating/CarRating";
import CarInfoRow from "@/common/InventryCarCard/CarInfoRow/CarInfoRow";
import Divider from "@/component/ui/Divider/Divider";
import BookBtn from "@/common/InventryCarCard/BookBtn/BookBtn";
import CarPriceSection from "@/common/InventryCarCard/CarPriceSection/CarPriceSection";
import { CarInvertoryI } from "@/types/interface";

import { isTrulyEmpty } from "@/utils/CommonHelp";

type InventryCarCardProps = {
  inventryCard: CarInvertoryI,
  bookNowHandler: (vehicle_id: string) => void
}

const InventryCarCard = ({ inventryCard, bookNowHandler }: InventryCarCardProps) => {
  const { vehicle_id, minimumRentalDays, tariff_daily, tariff_monthly, searchedPlan, finalPrice, } = inventryCard;
  const {
    model_name,
    specs,
    vehicle_rating,
    vehicle_promotion_tag,
    monthly_discount_percentage,
    images,
    _id
  } = vehicle_id || {};

  const AppliedPlanPrice = isTrulyEmpty(finalPrice) ? `${tariff_daily.base}/ Day` : `${finalPrice} / ${searchedPlan}`


  // console.log(_id, "_id___")


  return (
    <div className={``}>
      {/* ========= CAR HEADER */}
      <div className="relative">
        <CarImages images={images} />
        {vehicle_promotion_tag && <Badge text={`${vehicle_promotion_tag}`} className="absolute py-4 p-5  top-2 left-2 z-30" />}
      </div>
      {/* ========= CAR BODY */}
      <div
        className={`${bgColors.bgWhite} py-4 p-5 rounded-b-2xl shadow-[0px_3px_12px_0px_#0000001F]`}
      >
        <CarTitle title={model_name} />
        <CarRating rating={vehicle_rating} reviews={43} />
        <CarInfoRow carSpecs={specs} minimumRentalDays={minimumRentalDays} />
        <Divider color={bgColors.bgDivider} />
        <div className="flex justify-between items-center">
          <CarPriceSection
            tariff_daily={tariff_daily}
            tariff_monthly={tariff_monthly}
            monthly_discount_percentage={monthly_discount_percentage}

            AppliedPlanPrice={AppliedPlanPrice}
          />
          <BookBtn text="Book Now" vehicle_id={_id} onClick={bookNowHandler} />
        </div>
      </div>
    </div>
  );
};

export default InventryCarCard;
