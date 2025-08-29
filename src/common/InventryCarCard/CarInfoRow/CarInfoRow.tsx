import { textColors } from "@/constant/colors";
import { carCarInfoList } from "@/data/data";
import { VehicleSpecsI } from "@/types/helper.interface";
import SeatIcon from "@/assets/icons/seat_icon.svg"
import LuggageIcon from "@/assets/icons/luggage_icon.svg"
import OdometerIcon from "@/assets/icons/odometer_icon.svg"
import TransmissionModeIcon from "@/assets/icons/transmission_mode_icon.svg"
import CalendarIcon from "@/assets/icons/calendar_icon.svg"
// import Image from "next/image";
import React from "react";
import Image from "next/image";


type CarInfoRowProps = {
  carSpecs: VehicleSpecsI,
  minimumRentalDays: number
}

const CarInfoRow = ({ carSpecs, minimumRentalDays }: CarInfoRowProps) => {
  const { Seats, Transmission, mileage_limit, LuggageCapacity } = carSpecs || {};
  return (
    <div className="flex flex-wrap">
      <SingleSpecs imgIcon={SeatIcon} text={`${Seats} Seats`} />
      <SingleSpecs imgIcon={LuggageIcon} text={LuggageCapacity} /> {/* MISSIJNG FROM BACKEND */}
      <SingleSpecs imgIcon={OdometerIcon} text={`${mileage_limit}`} />
      <SingleSpecs imgIcon={TransmissionModeIcon} text={Transmission} />
      <SingleSpecs imgIcon={CalendarIcon} text={`Min. ${minimumRentalDays} days rental`} />
    </div>
  );
};

export default CarInfoRow;


const SingleSpecs = ({ imgIcon, text }) => {
  return <>
    <div className="flex gap-0.5 my-0.5 pe-2 items-center">
      <Image src={imgIcon} alt="" className="size-[16px]" />
      <span className={`${textColors.lightBlack} text-sm font-medium`}>
        {text}
      </span>
    </div>
  </>
}
