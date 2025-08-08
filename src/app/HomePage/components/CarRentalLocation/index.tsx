"use client";
import ChipsFilter from "@/component/ChipsFilter/ChipsFilter";
import Container from "@/component/layout/Container";
import Section from "@/component/section";
import SectionHeading from "@/component/SectionHeading";
import { bgColors, textColors } from "@/constant/colors";
import { carRentalLlocationList } from "@/data/data";
import useGetCarRentalLocation from "@/app/HomePage/hooks/useGetCarRentalLocation";
import CarRentalLocationList from "@/app/HomePage/components/CarRentalLocation/CarRentalLocationList";

const CarRentalLocation = () => {
  const { selected, onSelectHandler } = useGetCarRentalLocation();
  return (
    <Section bgColor={bgColors.bgGray}>
      <Container>
        <div className={`flex flex-col gap-4`}>
          <SectionHeading
            heading="Car Rental Locations Across the World"
            fontSize="text-3xl"
            textColor={textColors.textDarkBlue}
          />
          <ChipsFilter
            selectedChips={selected}
            onSelect={onSelectHandler}
            chipsOptionList={carRentalLlocationList}
          />

          <CarRentalLocationList />
        </div>
      </Container>
    </Section>
  );
};

export default CarRentalLocation;
