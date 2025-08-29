import Container from '@/component/layout/Container'
import React, { useEffect } from 'react'
import SearchQueryBtn from '../../../components/SearchQueryBtn'
import FeatureHighlight from '../../../components/FeatureHighlight'
import LocationField from '../../../components/LocationField'
import { LocationFieldI } from '../../../types/types'
import { dateFormat, getCurrentTime } from '@/utils/DateHelper/utils.date'
import useGetSuggestedLocation from '@/hooks/useGetSuggestedLocation'
import TimePickerField from '../../../components/TimePickerField'
import SelectMonthField from '../../../components/SelectMonthField'
import SingleDateField from '../../../components/SingleDateField'
import { isEmpty } from 'lodash'
import { getInventryPayloadMakerHelper } from '../../../helpsFunc'
import { searchEngineStore } from '@/state/searchEngineStore'
import { tripTripMap } from '@/constant/constant.maps'
import useNavigation from '@/hooks/useNavigation'

const MonthlyRentalDesktop = () => {

    const { navigate } = useNavigation()


    const source = searchEngineStore((store) => store.source)
    const pickupDateForMonth = searchEngineStore((store) => store.pickupDateForMonth)
    const pickuptime = searchEngineStore((store) => store.pickuptime)
    const totalMonthDuration = searchEngineStore((store) => store.totalMonthDuration)
    const minDate = searchEngineStore((store) => store.minDate)


    const addSourceAction = searchEngineStore((store) => store.addSourceAction)
    const addPickupDateForMonthAction = searchEngineStore((store) => store.addPickupDateForMonthAction)
    const addPickupTimeAction = searchEngineStore((store) => store.addPickupTimeAction)
    const addtotalMonthDurationAction = searchEngineStore((store) => store.addtotalMonthDurationAction)










    const minDateAsDateObj = getCurrentTime().toJSDate();


    // SELECT DATE RANGE HANDLER
    const handlerDateRange = (dateVal: Date) => {
        addPickupDateForMonthAction(dateVal);
    }


    // SET SOURCE LOCATION
    const handlerSourceLocation = (locVal: LocationFieldI) => addSourceAction(locVal);
    // SET PICKUP TIME
    const handlerPickUpTime = (timeVal: string) => addPickupTimeAction(timeVal)

    // SET TOTAL MONTH TIME
    const handlerForTotalMonth = (num: number) => addtotalMonthDurationAction(num);


    // const { pickupTimeSlabs } = useGeneratePickUpTimeSlabs({
    //     startDate: selected!, timeZone: minDate.timeZone,
    //     pickupTime: pickupTime,
    //     minDate: minDate,
    //     setPickupTime: handlerPickUpTime
    // })

    const { suggestLocationList = [] } = useGetSuggestedLocation();

    useEffect(() => {
        if (suggestLocationList && suggestLocationList.length > 0) {
            handlerSourceLocation(suggestLocationList[0]);
        }
    }, [suggestLocationList]);



    // START DATE
    const startDateValueStr = dateFormat(pickupDateForMonth);




    // PICKUP TIME IN 24 HOURS FORMAT
    const pickUpTimeValueStr = pickuptime || "";




    const searchHandler = () => {
        const query = getInventryPayloadMakerHelper({
            source: source,
            pickup: {
                date: pickupDateForMonth,
                time: pickuptime
            },
            drop: {
                date: pickupDateForMonth,
                time: pickuptime
            },
            minDate: minDate,
            plan_type: tripTripMap.MONTHLY_RENTAL.code,
            vehicle_class: "all",
            duration_months: totalMonthDuration
        })


        const path = `${source.city}/monthly-car-rental`

        if (!isEmpty(source) && source.city) {
            navigate(path, query);

            console.log(query, "query114")
        }
    }


    return (

        <React.Fragment>
            <Container>
                <div className='flex flex-col w-full items-center gap-4'>
                    <MonthlyRentalDesktopStrip onClick={searchHandler}>
                        {/* LOCATION FIELD */}
                        <LocationField label='City' value={source?.city || ""} placeholder='City' onClick={handlerSourceLocation}
                            locationList={suggestLocationList}
                        />
                        <div className='grid grid-cols-2 gap-1'>
                            <div className='grid grid-cols-2 gap-1'>
                                <SingleDateField
                                    selectedDate={pickupDateForMonth}
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
                                />
                            </div>
                            <SelectMonthField
                                label='For Month'
                                value={totalMonthDuration}
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