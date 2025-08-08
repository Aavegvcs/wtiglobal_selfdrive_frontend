import Container from "@/component/layout/Container";
import Section from "@/component/section";
import SectionHeading from "@/component/SectionHeading";
import React from "react";
import CarCategoryClassList from "@/app/HomePage/components/CarCategoryClass/CarCategoryClassList";
import { bgColors, textColors } from "@/constant/colors";

const CarCategoryClass = () => {

  return (
    <Section bgColor={bgColors.bgGray} className="">
      <Container>
        <div className="flex flex-col gap-8 w-full ">
          <SectionHeading
            heading="Fleets That Meets Your Needs"
            fontSize="text-2xl"
            textColor={textColors.textDartPurple}
          />
          <CarCategoryClassList />
        </div>
      </Container>
    </Section>
  );
};

export default CarCategoryClass;
