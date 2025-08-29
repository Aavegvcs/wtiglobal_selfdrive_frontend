import Container from '@/component/layout/Container'
import Section from '@/component/section'
import { bgColors } from '@/constant/colors'
import React from 'react'
import StatusHeader from '../../compnent/StatusHeader/StatusHeader';
import BookingSummary from '../../compnent/BookingSummary/BookingSummary';
import LocationCard from '../../compnent/LocationCard/LocationCard';
import { MdCancel } from 'react-icons/md';

const BookingFailed = () => {
    return (
        <Section paddY='py-14' bgColor={bgColors.bgFadeWhite}>
            <Container>
                <div className={`grid grid-cols-[3fr_1fr] gap-5 py-9`}>
                    {/* CONFIRM BOOKING INFO ( LEFT SIDE ) */}

                    <div className={`flex flex-col w-full p-6 ${bgColors.bgWhite} rounded-2xl`}>
                        <div className='flex flex-col gap-1 items-center justify-center w-full '>
                            <StatusHeader
                                icon={<MdCancel className='text-[#b73331] text-3xl' />}
                                headingTitle='Booking Confirmed'
                                textColor='text-[#b73331]'
                            />
                            {/* <BookingConfiormWishing text='Thank you for booking with WTi!' /> */}
                        </div>
                        <div className='flex items-center w-full'>
                            <div className='flex items-end w-6/12 py-6 pe-5'>
                                <img src="https://www.wticabs.com:3001/global/app/v1/aws/getImage/carimages/Dzire.png" alt="" />
                            </div>
                            <BookingSummary summaryList={
                                [
                                    { label: "Booking ID :", value: "WTI1234" },
                                    { label: "Booking Type :", value: "One Way Outstation" },
                                    { label: "Cab Category :", value: "Fuel Efficient (Hatchback)" },
                                    { label: "Booking Date :", value: "10 Oct, 2024" },
                                ]
                            } />
                        </div>

                        <div className='flex'>
                            <LocationCard
                                type="Pickup"
                                address="Dwarka Mor, Vipin Garden Extension, Vipin Garden, Nawada, Delhi, 110059, India"
                                date="10 Oct, 2024"
                                time="10:00 Hrs"
                            />

                            <LocationCard
                                type="Drop Off"
                                address="Dwarka Mor, Vipin Garden Extension, Vipin Garden, Nawada, Delhi, 110059, India"
                                date="10 Oct, 2024"
                                time="10:00 Hrs"
                            />
                        </div>
                    </div>


                    {/* BANNER ( RIGHT SIDE ) */}
                    <div>

                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default BookingFailed