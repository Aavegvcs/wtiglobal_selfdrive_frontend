import React from "react";
import CarRentalRentalLocationCard from "@/app/HomePage/components/CarRentalLocation/CarRentalRentalLocationCard";

const CarRentalLocationList = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => {
          return <CarRentalRentalLocationCard key={i} />;
        })}
      </div>
    </>
  );
};

export default CarRentalLocationList;
