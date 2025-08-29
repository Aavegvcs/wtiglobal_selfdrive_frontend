import Image from "next/image";
import UaeCarRentalLocationImg from "@/assets/images/uaeCarRentalLocation.png";
import React from "react";
import { textColors } from "@/constant/colors";
import { CarRentalLocationI } from "@/types/helper.interface";

type CarRentalRentalLocationCardProps = {
  cardLocation: CarRentalLocationI
}

const CarRentalRentalLocationCard = ({ cardLocation }: CarRentalRentalLocationCardProps) => {
  return (
    <div className="relative w-full">
      <img
        src={cardLocation.image }
        onError={(e) => (e.currentTarget.src = UaeCarRentalLocationImg.src)}
        className="w-full h-[200px] object-fill"
        alt=""
        width={200}
        height={"100"}
      />
      <div className={`absolute bottom-0 py-1.5 w-full`}>
        <h4 className={`${textColors.textWhite} text-center font-bold text-xl`}>
          {cardLocation.cityName}
        </h4>
      </div>
    </div>
  );
};

export default CarRentalRentalLocationCard;
