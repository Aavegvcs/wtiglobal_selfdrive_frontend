import Image from "next/image";
import UaeCarRentalLocationImg from "@/assets/images/uaeCarRentalLocation.png";
import React from "react";
import { textColors } from "@/constant/colors";

const CarRentalRentalLocationCard = () => {
  return (
    <div className="relative w-full">
      <Image
        src={UaeCarRentalLocationImg}
        className="w-full h-[200px] object-fill"
        alt=""
        
      />
      <div className={`absolute bottom-0 py-1.5 w-full`}>
        <h4 className={`${textColors.textWhite} text-center font-bold text-xl`}>
          UAE
        </h4>
      </div>
    </div>
  );
};

export default CarRentalRentalLocationCard;
