import React from "react";
import CarCategoryClassCard from "@/app/HomePage/components/CarCategoryClass/CarCategoryClassCard";

const CarCategoryClassList = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 w-full">
      {[1, 2, 3, 4].map((el, i) => (
        <CarCategoryClassCard key={i} />
      ))}
    </div>
  );
};

export default CarCategoryClassList;
