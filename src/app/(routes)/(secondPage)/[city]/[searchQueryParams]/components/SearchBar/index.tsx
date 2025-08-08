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

const SearchBar = () => {

    const [tripType, setTripType] = useState<number>(2);


    const isDailyOrWeekly: boolean = tripTripMap.DAILY_RENTAL.code === tripType;
    const isMonthlyWeekly: boolean = tripTripMap.MONTHLY_RENTAL.code === tripType;


    return (
        <div className='flex-col'>
            <div className='w-full h-[72px]'></div>
            <Section bgColor={bgColors.bgWhite} paddY={`py-3`} className='shadow-[0px_4px_12px_0px_#0000001F]'>
                <Container>
                    <div className='grid grid-cols-[auto_120px] gap-1'>
                        <div className={`grid grid-cols-[0.9fr_1.1fr] gap-1 w-full`}>
                            <div className={`grid grid-cols-2 gap-1`}>
                                <TripTypeField onClick={setTripType} />
                                <LocationField label='City' value='' placeholder='City' onClick={() => { }} />
                            </div>
                            <React.Fragment>
                                {
                                    isDailyOrWeekly &&
                                    <div className={`grid grid-cols-4 gap-1`}>
                                        <>
                                            <DateField selectedDateRange={{ startDate: new Date(), endDate: new Date(), key: 'selection', }} label='Pick-Up Date' value='' dateType="START_DATE" placeholder='pickip date' />
                                            <TimePickerField label='Pick-up Time' value='10 : 23' placeholder='pickup time' timeSlabList={[]} onSelect={() => { }} />
                                        </>
                                        <>
                                            <DateField selectedDateRange={{ startDate: new Date(), endDate: new Date(), key: 'selection', }} label='Return Date' value='' dateType="END_DATE" placeholder='Return Date' />
                                            <TimePickerField label='Return Time' value='10 : 23' placeholder='Return Time' timeSlabList={[]} onSelect={() => { }} />
                                        </>
                                    </div>
                                }
                            </React.Fragment>

                            <React.Fragment>

                                {
                                    isMonthlyWeekly &&
                                    <div className={`grid grid-cols-2 gap-1`}>
                                        <div className='grid grid-cols-2 gap-1'>
                                            <SingleDateField minDate={new Date()} selectedDate={new Date()} label='Pick-Up Date' value='' dateType="START_DATE" placeholder='pickip date' onChange={() => { }} />
                                            <TimePickerField label='Pick-up Time' value='10 : 23' placeholder='pickup time' timeSlabList={[]} onSelect={() => { }} />
                                        </div>
                                        <SelectMonthField label='Select Month' value={3} onClick={() => { }} placeholder='' />
                                    </div>
                                }
                            </React.Fragment>

                        </div>

                        <ModifyQueryBtn onClick={() => { }} />
                    </div>
                </Container>
            </Section>
        </div>
    )
}

export default SearchBar