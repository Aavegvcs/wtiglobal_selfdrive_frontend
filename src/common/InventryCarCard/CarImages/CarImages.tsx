import MyScrollBarSlider from "@/component/MySliders/MyScrollBarSlider";
import React from "react";

export type CarImagesProps = {
  images: string[]
}

const CarImages = ({ images }: CarImagesProps) => {
  return (
    <>
      <MyScrollBarSlider images={images} />
    </>
  );
};

export default CarImages;
