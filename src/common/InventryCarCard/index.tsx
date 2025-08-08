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

const InventryCarCard = () => {
  return (
    <div className={``}>
      {/* ========= CAR HEADER */}
      <div className="relative">
        <CarImages />
        <Badge text="20% off" className="absolute top-2 left-2 z-30" />
      </div>
      {/* ========= CAR BODY */}
      <div
        className={`${bgColors.bgWhite} py-4 p-5 rounded-b-2xl shadow-[0px_3px_12px_0px_#0000001F]`}
      >
        <CarTitle title="Suziki Dzire" />
        <CarRating  rating = {32}  reviews ={43}/>
        <CarInfoRow />
        <Divider color={bgColors.bgDivider} />
        <div className="flex justify-between items-center">
          <CarPriceSection />
          <BookBtn text="Book Now" />
        </div>
      </div>
    </div>
  );
};

export default InventryCarCard;
