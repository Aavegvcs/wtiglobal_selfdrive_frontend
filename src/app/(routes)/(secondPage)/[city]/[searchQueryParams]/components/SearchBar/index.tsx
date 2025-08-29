"use client"
import Container from '@/component/layout/Container'
import Section from '@/component/section'
import { bgColors } from '@/constant/colors'
import React, { useState } from 'react'
import TripTypeField from '../TripTypeField'
import LocationField from '../LocationField'
import DateField from '../DateField'
import TimePickerField from '../TimePickerField'
import ModifyQueryBtn from '../ModifyQueryBtn'
import SelectMonthField from '../SelectMonthField'
import { tripTripMap } from '@/constant/constant.maps'

import SingleDateField from '../SingleDateField'

import useKeepSearchEngineStoreInSync from '../../hooks/useKeepSearchEngineStoreInSync'
import { searchEngineStore } from '@/state/searchEngineStore'
import { dateFormat } from '@/utils/DateHelper/utils.date'
import { LocationFieldI } from '@/app/PathWatcherForHeroSection/HeroSection/types/types'
import { Range } from 'react-date-range'
import { getInventryPayloadMakerHelper } from '@/app/PathWatcherForHeroSection/HeroSection/helpsFunc'
import { isEmpty } from 'lodash'
import useNavigation from '@/hooks/useNavigation'
import { useRouter } from 'next/navigation'

interface SearchBarProps {
    tripType: number
    tripTypeHandler: (val: number) => void
}

const SearchBar = ({ tripType, tripTypeHandler }: SearchBarProps) => {
    const route = useRouter();
    const { navigate } = useNavigation()





    useKeepSearchEngineStoreInSync({ tripType: tripType, tripTypeHandler: tripTypeHandler })

    const source = searchEngineStore((store) => store.source)
    const selectedDateRange = searchEngineStore((store) => store.selectedDateRange)
    const pickuptime = searchEngineStore((store) => store.pickuptime)
    const droptime = searchEngineStore((store) => store.droptime)
    const minDate = searchEngineStore((store) => store.minDate)
    const pickupDateForMonth = searchEngineStore((store) => store.pickupDateForMonth)
    const totalMonthDuration = searchEngineStore((store) => store.totalMonthDuration)


    const addSourceAction = searchEngineStore((store) => store.addSourceAction)
    const addPickupDateForMonthAction = searchEngineStore((store) => store.addPickupDateForMonthAction)
    const addSelectedDateRangeAction = searchEngineStore((store) => store.addSelectedDateRangeAction)
    const addPickupTimeAction = searchEngineStore((store) => store.addPickupTimeAction)
    const addtotalMonthDurationAction = searchEngineStore((store) => store.addtotalMonthDurationAction)


    // SELECT DATE RANGE HANDLER
    const handlerDateSingle = (dateVal: Date) => {
        addPickupDateForMonthAction(dateVal);
    }

    // SELECT DATE RANGE HANDLER
    const handlerDateRange = (dateRangeVal: Range) => {

        addSelectedDateRangeAction({
            startDate: new Date(dateRangeVal.startDate!),
            endDate: new Date(dateRangeVal.endDate!),
            key: 'selection'
        });
    }


    // SET SOURCE LOCATION
    const handlerSourceLocation = (locVal: LocationFieldI) => addSourceAction(locVal);
    // SET PICKUP TIME
    const handlerPickUpTime = (timeVal: string) => addPickupTimeAction(timeVal)

    // SET TOTAL MONTH TIME
    const handlerForTotalMonth = (num: number) => addtotalMonthDurationAction(num);

    const selectedTripType = Object.values(tripTripMap).find((el) => el.code === tripType)




    const isDailyOrWeekly: boolean = tripTripMap.DAILY_RENTAL.code === tripType;
    const isMonthlyWeekly: boolean = tripTripMap.MONTHLY_RENTAL.code === tripType;

    // START DATE
    const startDateValueStr = selectedDateRange && dateFormat(selectedDateRange.startDate!);

    // END DATE
    const endDateValueStr = selectedDateRange && dateFormat(selectedDateRange.endDate!);

    const pickupDateForMonthStr = selectedDateRange && dateFormat(pickupDateForMonth!);


    const searchHandler = () => {
        const pathname = window.location.pathname;

        // console.log(pathname, "pathname98")


        const modifiedQuery = {
            source: source,
            pickup: {
                date: selectedDateRange && selectedDateRange.startDate!,
                time: pickuptime
            },
            drop: {
                date: selectedDateRange && selectedDateRange.endDate!,
                time: droptime
            },
            minDate: minDate,
            plan_type: tripTripMap.DAILY_RENTAL.code,
            vehicle_class: "all",

        }

        if (tripType === tripTripMap.MONTHLY_RENTAL.code) {
            modifiedQuery.pickup.date = pickupDateForMonth;
            modifiedQuery.pickup.time = pickuptime;
            modifiedQuery.plan_type = tripTripMap.MONTHLY_RENTAL.code
        }

        const query = getInventryPayloadMakerHelper(modifiedQuery)




        let path = `/${source.city}/daily-car-rental`
        if (tripType === tripTripMap.MONTHLY_RENTAL.code) {
            path = `/${source.city}/monthly-car-rental`
        }


        if (!isEmpty(source) && source.city) {
            navigate(path, query)
        }
    }


    return (
        <div className='flex-col'>
            <div className='w-full h-[72px]'></div>
            <Section bgColor={bgColors.bgWhite} paddY={`py-3`} className='shadow-[0px_4px_12px_0px_#0000001F]'>
                <Container>
                    <div className='grid grid-cols-[auto_120px] gap-1'>
                        <div className={`grid grid-cols-[0.9fr_1.1fr] gap-1 w-full`}>
                            <div className={`grid grid-cols-2 gap-1`}>
                                <TripTypeField textValue={selectedTripType?.textValue || ""} code={1} onClick={tripTypeHandler} />
                                <LocationField label='City' value={source?.city || ""} placeholder='City' onClick={handlerSourceLocation} />
                            </div>
                            <React.Fragment>
                                {
                                    isDailyOrWeekly &&
                                    <div className={`grid grid-cols-4 gap-1`}>
                                        <>
                                            <DateField onRangeChange={handlerDateRange} minDate={minDate} selectedDateRange={selectedDateRange} label='Pick-Up Date' value={startDateValueStr} dateType="START_DATE" placeholder='pickip date' />
                                            <TimePickerField label='Pick-up Time' value={pickuptime} placeholder='pickup time' onSelect={addPickupTimeAction} />
                                        </>
                                        <>
                                            <DateField onRangeChange={handlerDateRange} minDate={minDate} selectedDateRange={selectedDateRange} label='Return Date' value={endDateValueStr} dateType="END_DATE" placeholder='Return Date' />
                                            <TimePickerField label='Return Time' value={droptime} placeholder='Return Time' onSelect={() => { }} />
                                        </>
                                    </div>
                                }
                            </React.Fragment>

                            <React.Fragment>

                                {
                                    isMonthlyWeekly &&
                                    <div className={`grid grid-cols-2 gap-1`}>
                                        <div className='grid grid-cols-2 gap-1'>
                                            <SingleDateField minDate={minDate} selectedDate={pickupDateForMonth} label='Pick-Up Date' value={pickupDateForMonthStr || ""} dateType="START_DATE" placeholder='pickip date' onChange={handlerDateSingle} />
                                            <TimePickerField label='Pick-up Time' value={pickuptime} placeholder='pickup time' onSelect={() => { }} />
                                        </div>
                                        <SelectMonthField label='Select Month' value={totalMonthDuration} onClick={handlerForTotalMonth} placeholder='' />
                                    </div>
                                }
                            </React.Fragment>

                        </div>

                        <ModifyQueryBtn onClick={searchHandler} />
                    </div>
                </Container>
            </Section>
        </div>
    )
}

export default SearchBar