import { textColors } from "@/constant/colors";
import React from "react";
import { FaStar } from "react-icons/fa";

type CarRatingProps = {
  rating: number;
  reviews?: number;
};

const CarRating = ({ rating, reviews }: CarRatingProps) => {
  return (
    <div className={`flex gap-1 items-center text-[12px] mb-1 ${textColors.lightBlack}`}>
      <span>{rating}</span>
      <FaStar className={textColors.textYellow} />
      {/* <span>{reviews} Reviews</span> */}
    </div>
  );
};

export default CarRating;
