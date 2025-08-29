import React, { useEffect, useState } from 'react'
import SearchQueryBtn from '@/app/PathWatcherForHeroSection/HeroSection/components/SearchQueryBtn'
import Container from '@/component/layout/Container'
import LocationField from '@/app/PathWatcherForHeroSection/HeroSection/components/LocationField'
import DateField from '@/app/PathWatcherForHeroSection/HeroSection/components/DateField'
import TimePickerField from '@/app/PathWatcherForHeroSection/HeroSection/components/TimePickerField'
import FeatureHighlight from '@/app/PathWatcherForHeroSection/HeroSection/components/FeatureHighlight'
import { Range } from 'react-date-range'
import { LocationFieldI } from '../../../types/types'
import { dateFormat } from '@/utils/DateHelper/utils.date'

import useGetSuggestedLocation from '@/hooks/useGetSuggestedLocation'
import { searchEngineStore } from '@/state/searchEngineStore'
import { getInventryPayloadMakerHelper } from '../../../helpsFunc'
import useNavigation from '@/hooks/useNavigation'
import { isEmpty } from 'lodash'
import { tripTripMap } from '@/constant/constant.maps'



const DailyRentalDesktop = () => {
    const { navigate } = useNavigation()


    const source = searchEngineStore((store) => store.source)
    const selectedDateRange = searchEngineStore((store) => store.selectedDateRange)
    const pickuptime = searchEngineStore((store) => store.pickuptime)
    const droptime = searchEngineStore((store) => store.droptime)
    const minDate = searchEngineStore((store) => store.minDate)


    const addSourceAction = searchEngineStore((store) => store.addSourceAction)
    const addSelectedDateRangeAction = searchEngineStore((store) => store.addSelectedDateRangeAction)
    const addPickupTimeAction = searchEngineStore((store) => store.addPickupTimeAction)
    const addDropTimeAction = searchEngineStore((store) => store.addDropTimeAction)


    // SELECT DATE RANGE HANDLER
    const handlerDateRange = (dateRangeVal: Range) => {

        addSelectedDateRangeAction({
            startDate: new Date(dateRangeVal.startDate!),
            endDate: new Date(dateRangeVal.endDate!),
            key: 'selection'
        });
    }

    // SET MINDATE TIME
    // const handlerMinDateTime = (timeVal: SelectedTime) => setMinDate(timeVal)

    // SET SOURCE LOCATION
    const handlerSourceLocation = (locVal: LocationFieldI) => addSourceAction(locVal);

    // SET PICKUP TIME
    const handlerPickUpTime = (timeVal: string) => addPickupTimeAction(timeVal)

    // SET DROP TIME
    const handlerDropTime = (timeVal: string) => addDropTimeAction(timeVal)


    const { suggestLocationList = [] } = useGetSuggestedLocation();

    useEffect(() => {
        if (suggestLocationList && suggestLocationList.length > 0) {
            handlerSourceLocation(suggestLocationList[0]);
        }
    }, [suggestLocationList]);









    // START DATE
    const startDateValueStr = selectedDateRange && dateFormat(selectedDateRange.startDate!);

    // END DATE
    const endDateValueStr = selectedDateRange && dateFormat(selectedDateRange.endDate!);


    // PICKUP TIME IN 24 HOURS FORMAT
    const pickUpTimeValueStr = pickuptime || "";

    // END TIME IN 24 HOURS FORMAT
    const endTimeValueStr = droptime || "";


    const searchHandler = () => {
        const query = getInventryPayloadMakerHelper({
            source: source,
            pickup: {
                date: selectedDateRange && selectedDateRange.startDate!,
                time: pickuptime
            },
            drop: {
                date: selectedDateRange && selectedDateRange.endDate!,
                time: droptime
            },
            minDate: minDate ,
            plan_type: tripTripMap.DAILY_RENTAL.code,
            vehicle_class: "all"
        })


        const path = `${source.city}/daily-weekly-car-rental`

        if (!isEmpty(source) && source.city) {
            navigate(path, query);
        }
    }






    return (
        <React.Fragment>
            <Container>
                <div className='flex flex-col w-full items-center gap-4'>
                    <DailyRentalDesktopStrip onClick={searchHandler}>
                        {/* LOCATION FIELD */}
                        <LocationField label='City' value={source?.city || ""} placeholder='City' onClick={handlerSourceLocation}
                            locationList={suggestLocationList}
                        />

                        <div className={`grid grid-cols-4 gap-1`}>
                            <DateField
                                selectedDateRange={selectedDateRange}
                                onRangeChange={handlerDateRange}
                                label='From Date' value={startDateValueStr}
                                placeholder=''
                                dateType="START_DATE"
                                minDate={minDate}
                            />
                            <TimePickerField
                                label='Pickup-Time'
                                value={pickUpTimeValueStr}
                                placeholder=''
                                onSelect={handlerPickUpTime}
                            />
                            <DateField
                                selectedDateRange={selectedDateRange}
                                onRangeChange={handlerDateRange}
                                label='To Date' value={endDateValueStr} placeholder=''
                                dateType="END_DATE"
                                minDate={minDate}
                            />
                            <TimePickerField
                                label='Drop-Time'
                                value={endTimeValueStr}
                                placeholder=''
                                onSelect={handlerDropTime}

                            // minDate={minDate}

                            />
                        </div>
                    </DailyRentalDesktopStrip>
                    <FeatureHighlight />
                </div>
            </Container>
        </React.Fragment>
    )
}

export default DailyRentalDesktop


const DailyRentalDesktopStrip = ({ children,
    onClick, }: { children: React.ReactNode, onClick: () => void }) => {
    return (<>
        <div className="grid grid-cols-[0.7fr_1.3fr_88px] gap-1 w-full bg-white rounded-lg p-4">
            {children}
            <SearchQueryBtn
                onClick={onClick}
            />
        </div>
    </>)
}