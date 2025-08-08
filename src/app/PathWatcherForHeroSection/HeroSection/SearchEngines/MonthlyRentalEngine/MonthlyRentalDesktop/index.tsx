import Container from '@/component/layout/Container'
import React, { useEffect, useState } from 'react'
import SearchQueryBtn from '../../../components/SearchQueryBtn'
import FeatureHighlight from '../../../components/FeatureHighlight'
import LocationField from '../../../components/LocationField'
import { LocationFieldI, SelectedTime } from '../../../types/types'
import { dateFormat, getCurrentTime, timeIn24HourFormat } from '@/utils/DateHelper/utils.date'
import useGeneratePickUpTimeSlabs from '../../../hooks/useGeneratePickUpTimeSlabs'
import useGetSuggestedLocation from '@/hooks/useGetSuggestedLocation'
import DateField from '../../../components/DateField'
import { Range } from 'react-date-range'
import TimePickerField from '../../../components/TimePickerField'
import SelectMonthField from '../../../components/SelectMonthField'
import SingleDateField from '../../../components/SingleDateField'

const MonthlyRentalDesktop = () => {
    const [source, setSource] = useState<LocationFieldI>({ city: "", countryCode: "" });
    // eslint-disable-next-line no-console
    const [minDate, setMinDate] = useState<SelectedTime>(
        {
            time: getCurrentTime().toISO() ?? "",
            timeZone: getCurrentTime()?.zoneName ?? "",
        }
    );
    const [selected, setSelected] = React.useState<Date | undefined>(getCurrentTime().toJSDate());


    const [pickupTime, setPickupTime] = useState<SelectedTime>(
        {
            time: getCurrentTime()?.toISO() ?? "",
            timeZone: getCurrentTime()?.zoneName ?? "",
        }
    )

    const [forTotalMonth, setForTotalMonth] = useState<number>(4);








    const minDateAsDateObj = getCurrentTime().toJSDate();


    // SELECT DATE RANGE HANDLER
    const handlerDateRange = (dateVal: Date) => {
        setSelected(dateVal);
    }


    // SET SOURCE LOCATION
    const handlerSourceLocation = (locVal: LocationFieldI) => setSource(locVal);

    // SET PICKUP TIME
    const handlerPickUpTime = (timeVal: SelectedTime) => setPickupTime(timeVal);

    // SET PICKUP TIME
    const handlerForTotalMonth = (num: number) => setForTotalMonth(num);


    const { pickupTimeSlabs } = useGeneratePickUpTimeSlabs({
        startDate: selected!, timeZone: minDate.timeZone,
        pickupTime: pickupTime,
        minDate: minDate,
        setPickupTime: handlerPickUpTime
    })

    const { suggestLocationList = [] } = useGetSuggestedLocation();

    useEffect(() => {
        if (suggestLocationList && suggestLocationList.length > 0) {
            handlerSourceLocation(suggestLocationList[0]);
        }
    }, [suggestLocationList]);



    // START DATE
    const startDateValueStr = dateFormat(selected);






    // PICKUP TIME IN 24 HOURS FORMAT
    const pickUpTimeValueStr = timeIn24HourFormat({ time: pickupTime?.time, timeZone: pickupTime?.timeZone });
    return (

        <React.Fragment>
            <Container>
                <div className='flex flex-col w-full items-center gap-4'>
                    <MonthlyRentalDesktopStrip>

                        {/* LOCATION FIELD */}
                        <LocationField label='City' value={source && source?.city} placeholder='City' onClick={handlerSourceLocation}
                            locationList={suggestLocationList}
                        />
                        <div className='grid grid-cols-2 gap-1'>
                            <div className='grid grid-cols-2 gap-1'>
                                <SingleDateField
                                    selectedDate={selected!}
                                    onChange={handlerDateRange}
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
                            </div>
                            <SelectMonthField
                                label='For Month'
                                value={forTotalMonth}
                                placeholder='Select Month'
                                onClick={handlerForTotalMonth}
                            />
                        </div>
                    </MonthlyRentalDesktopStrip>
                    <FeatureHighlight />
                </div>
            </Container>
        </React.Fragment>

    )
}

export default MonthlyRentalDesktop



const MonthlyRentalDesktopStrip = ({ children,
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