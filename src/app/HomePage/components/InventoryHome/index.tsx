"use client";
import ChipsFilter from "@/component/ChipsFilter/ChipsFilter";
import Container from "@/component/layout/Container";
import Section from "@/component/section";
import SectionHeading from "@/component/SectionHeading";
import { bgColors, textColors } from "@/constant/colors";
import { inventoryCategoryList } from "@/data/data";
import { useGetInvertory } from "@/app/HomePage/hooks/useGetInventory";
import InventoryCarList from "@/app/HomePage/components/InventoryHome/InventoryCarList";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { searchEngineStore } from "@/state/searchEngineStore";
import { dateFormat } from "@/utils/DateHelper/utils.date";
import { tripTripMap } from "@/constant/constant.maps";

const InventoryHome = () => {
  const { selected, onSelectHandler, inventryList, isLoading, error } = useGetInvertory();

  const source = searchEngineStore((store) => store.source)
  const selectedDateRange = searchEngineStore((store) => store.selectedDateRange)
  const pickuptime = searchEngineStore((store) => store.pickuptime)
  const droptime = searchEngineStore((store) => store.droptime)

  const searchParams = useSearchParams();
  const router = useRouter();

  const param = new URLSearchParams(searchParams);





  if (error) {
    return <p>error</p>
  }

  if (isLoading) {
    return <>
     <p>Loading ...</p>
    </>
  }

  const pickupDateTime = {
    date: selectedDateRange.startDate && dateFormat(selectedDateRange.startDate),
    time: pickuptime
  }
  const dropDateTime = {
    date: selectedDateRange.endDate && dateFormat(selectedDateRange.endDate),
    time: pickuptime
  }


  const navigateToBookingDetailsHandler = (vehicle_id: string) => {

    param.set("source", JSON.stringify(source))
    param.set("vehicle_id", vehicle_id)
    param.set("pickup", JSON.stringify(pickupDateTime))
    param.set("drop", JSON.stringify(dropDateTime))
    param.set("is_home_page", "true")
    param.set("plan_type", tripTripMap.DAILY_RENTAL.code.toString())

    router.push(`booking-details/details?${param.toString()}`)
  }



  return (
    <React.Fragment>
      {
        inventryList.length > 0 &&
        <Section bgColor={bgColors.bgGray}>

          <Container>
            <div className="flex flex-col gap-5 justify-center w-full tex">
              <SectionHeading
                heading="Discover WTI’s Top-Rated Rides"
                description="Explore our most popular car rental options — trusted by thousands across India for daily, weekly, and long-term needs."
                fontSize="text-4xl"
                textColor={textColors.textDarkBlue}
                marginBottom=""
              />
              <ChipsFilter
                chipsOptionList={inventoryCategoryList}
                selectedChips={selected}
                onSelect={onSelectHandler}
              />
              <InventoryCarList inventryList={inventryList}
                bookNowHandler={navigateToBookingDetailsHandler}
              />
            </div>

          </Container>
        </Section>
      }

    </React.Fragment>
  );
};

export default InventoryHome;
