"use client";
import ChipsFilter from "@/component/ChipsFilter/ChipsFilter";
import Container from "@/component/layout/Container";
import Section from "@/component/section";
import SectionHeading from "@/component/SectionHeading";
import { bgColors, textColors } from "@/constant/colors";
// import { carRentalLlocationList } from "@/data/data";
import useGetCarRentalLocation from "@/app/HomePage/hooks/useGetCarRentalLocation";
import CarRentalLocationList from "@/app/HomePage/components/CarRentalLocation/CarRentalLocationList";
import React from "react";

const CarRentalLocation = () => {
  const { selected, onSelectHandler, locationList, heading, isLoading, isActive, availableCountry } = useGetCarRentalLocation();


  if (isLoading) {
    return <p>Loading ...</p>
  }




  return (
    <React.Fragment>

      {
        isActive &&
        <Section bgColor={bgColors.bgGray}>
          <Container>
            <div className={`flex flex-col gap-4`}>
              <SectionHeading
                heading={heading}
                fontSize="text-3xl"
                textColor={textColors.textDarkBlue}
              />
              <ChipsFilter
                selectedChips={selected}
                onSelect={onSelectHandler}
                // chipsOptionList={carRentalLlocationList}
                chipsOptionList={availableCountry || []}
              />

              <CarRentalLocationList locationList={locationList} />
            </div>
          </Container>
        </Section>
      }

    </React.Fragment>
  );
};

export default CarRentalLocation;
