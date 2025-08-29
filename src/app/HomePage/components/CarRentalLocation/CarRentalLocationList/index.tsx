import React from "react";
import CarRentalRentalLocationCard from "@/app/HomePage/components/CarRentalLocation/CarRentalRentalLocationCard";
import { CarRentalLocationI } from "@/types/helper.interface";

type CarRentalLocationListProps = {
  locationList: CarRentalLocationI[]
}

const CarRentalLocationList = ({ locationList }: CarRentalLocationListProps) => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {locationList.map((el, i) => {
          return <CarRentalRentalLocationCard cardLocation={el} key={i} />;
        })}
      </div>
    </>
  );
};

export default CarRentalLocationList;
