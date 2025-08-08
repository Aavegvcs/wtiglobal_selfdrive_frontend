import React, { useEffect, useState } from 'react'
import SearchQueryBtn from '@/app/PathWatcherForHeroSection/HeroSection/components/SearchQueryBtn'
import Container from '@/component/layout/Container'
import LocationField from '@/app/PathWatcherForHeroSection/HeroSection/components/LocationField'
import DateField from '@/app/PathWatcherForHeroSection/HeroSection/components/DateField'
import TimePickerField from '@/app/PathWatcherForHeroSection/HeroSection/components/TimePickerField'
import FeatureHighlight from '@/app/PathWatcherForHeroSection/HeroSection/components/FeatureHighlight'
import { Range } from 'react-date-range'
import { LocationFieldI, SelectedTime } from '../../../types/types'
import { dateFormat, getCurrentTime, timeIn24HourFormat } from '@/utils/DateHelper/utils.date'
import useGeneratePickUpTimeSlabs from '../../../hooks/useGeneratePickUpTimeSlabs'
import useGenerateDropTimeSlabs from '../../../hooks/useGenerateDropTimeSlabs'
import useGetSuggestedLocation from '@/hooks/useGetSuggestedLocation'



const DailyRentalDesktop = () => {
    const [source, setSource] = useState<LocationFieldI>({ city: "", countryCode: "" });
    // eslint-disable-next-line no-console
    const [minDate, setMinDate] = useState<SelectedTime>(
        {
            time: getCurrentTime().toISO() ?? "",
            timeZone: getCurrentTime()?.zoneName ?? "",
        }
    );
    const [selectedDateRange, setSelectedDateRange] = useState<Range>({
        startDate: getCurrentTime().toJSDate(),
        endDate: getCurrentTime().plus({ day: 1 }).toJSDate(),
        key: 'selection',
    })


    const [pickupTime, setPickupTime] = useState<SelectedTime>(
        {
            time: getCurrentTime()?.toISO() ?? "",
            timeZone: getCurrentTime()?.zoneName ?? "",
        }
    )
    const [dropTime, setDropTime] = useState<SelectedTime>(
        {
            time: getCurrentTime().plus({ day: 1 })?.toISO() ?? "",
            timeZone: getCurrentTime()?.zoneName ?? ""
        }
    )







    const minDateAsDateObj = getCurrentTime().toJSDate();









    // SELECT DATE RANGE HANDLER
    const handlerDateRange = (dateRangeVal: Range) => {

        // setSelectedDateRange(dateRangeVal)

        setSelectedDateRange({
            startDate: new Date(dateRangeVal.startDate!),
            endDate: new Date(dateRangeVal.endDate!),
            key: 'selection'
        });
    }

    // SET MINDATE TIME
    // const handlerMinDateTime = (timeVal: SelectedTime) => setMinDate(timeVal)

    // SET SOURCE LOCATION
    const handlerSourceLocation = (locVal: LocationFieldI) => setSource(locVal);

    // SET PICKUP TIME
    const handlerPickUpTime = (timeVal: SelectedTime) => setPickupTime(timeVal)

    // SET DROP TIME
    const handlerDropTime = (timeVal: SelectedTime) => setDropTime(timeVal)


    const { pickupTimeSlabs } = useGeneratePickUpTimeSlabs({
        startDate: selectedDateRange.startDate!, timeZone: minDate.timeZone,
        pickupTime: pickupTime,
        minDate: minDate,
        setPickupTime: handlerPickUpTime
    })
    const { dropTimeSlabs } = useGenerateDropTimeSlabs({
        endDate: selectedDateRange.endDate!, timeZone: minDate.timeZone,
        dropTime: dropTime,
        minDate: minDate,
        setDropTime: handlerDropTime
    })

    const { suggestLocationList = [] } = useGetSuggestedLocation();

    useEffect(() => {
        if (suggestLocationList && suggestLocationList.length > 0) {
            handlerSourceLocation(suggestLocationList[0]);
        }
    }, [suggestLocationList]);









    // START DATE
    const startDateValueStr = dateFormat(selectedDateRange.startDate);

    // END DATE
    const endDateValueStr = dateFormat(selectedDateRange.endDate);




    // PICKUP TIME IN 24 HOURS FORMAT
    const pickUpTimeValueStr = timeIn24HourFormat({ time: pickupTime?.time, timeZone: pickupTime?.timeZone });

    // END TIME IN 24 HOURS FORMAT
    const endTimeValueStr = timeIn24HourFormat({ time: dropTime?.time, timeZone: dropTime?.timeZone });


    return (
        <React.Fragment>
            <Container>
                <div className='flex flex-col w-full items-center gap-4'>
                    <DailyRentalDesktopStrip onClick={() => { }}>
                        {/* LOCATION FIELD */}
                        <LocationField label='City' value={source && source?.city} placeholder='City' onClick={handlerSourceLocation}
                            locationList={suggestLocationList}
                        />

                        <div className={`grid grid-cols-4 gap-1`}>
                            <DateField
                                selectedDateRange={selectedDateRange}
                                onRangeChange={handlerDateRange}
                                label='From Date' value={startDateValueStr}
                                placeholder=''
                                dateType="START_DATE"
                                minDate={minDateAsDateObj}
                            />
                            <TimePickerField
                                label='Pickup-Time'
                                value={pickUpTimeValueStr}
                                placeholder=''
                                onSelect={handlerPickUpTime}
                                timeSlabList={pickupTimeSlabs}
                                minDate={minDate}

                            />
                            <DateField
                                selectedDateRange={selectedDateRange}
                                onRangeChange={handlerDateRange}
                                label='To Date' value={endDateValueStr} placeholder=''
                                dateType="END_DATE"
                                minDate={minDateAsDateObj}
                            />
                            <TimePickerField
                                label='Drop-Time'
                                value={endTimeValueStr}
                                placeholder=''
                                onSelect={handlerDropTime}
                                timeSlabList={dropTimeSlabs}
                                minDate={minDate}

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