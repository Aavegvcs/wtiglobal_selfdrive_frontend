"use client"
import React, { useState } from 'react'
import SearchBar from '@/app/(routes)/(secondPage)/[city]/[searchQueryParams]/components/SearchBar'
import FilterInventoryDesktop from './components/FilterInventoryDesktop'
import Section from '@/component/section'
import { bgColors } from '@/constant/colors'
import InventoryList from './components/InventoryList/InventoryList'
import useGetAllInventory from './hooks/useGetAllInventory'
import { searchEngineStore } from '@/state/searchEngineStore'
import { useRouter, useSearchParams } from 'next/navigation'

import { tripTripMap } from '@/constant/constant.maps'
import { dateFormat } from '@/utils/DateHelper/utils.date'

const SelfDriveInventory = () => {
  const { isLoading, inventryList } = useGetAllInventory()
  const [tripType, setTripType] = useState<number>(1);

  const tripTypeHandler = (tripTypeCode: number) => setTripType(tripTypeCode);


  const source = searchEngineStore((store) => store.source)
  const selectedDateRange = searchEngineStore((store) => store.selectedDateRange)
  const pickuptime = searchEngineStore((store) => store.pickuptime)
  const droptime = searchEngineStore((store) => store.droptime)
  const totalMonthDuration = searchEngineStore((store) => store.totalMonthDuration)

  const searchParams = useSearchParams();
  const router = useRouter();

  const param = new URLSearchParams(searchParams);






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
    param.set("is_home_page", "false")
    param.set("plan_type", tripType.toString())
    if (tripType === tripTripMap.MONTHLY_RENTAL.code) {
      param.set("duration_months", totalMonthDuration.toString())
    }





    router.push(`/booking-details/details?${param.toString()}`)
  }

  return (
    <>
      <Section bgColor={bgColors.bgGray} paddY='pt-0 pb-6'>
        <SearchBar tripType={tripType} tripTypeHandler={tripTypeHandler} />
        <FilterInventoryDesktop />
        <InventoryList bookNowHandler={navigateToBookingDetailsHandler} inventryList={inventryList} />
      </Section>
    </>
  )
}

export default SelfDriveInventory