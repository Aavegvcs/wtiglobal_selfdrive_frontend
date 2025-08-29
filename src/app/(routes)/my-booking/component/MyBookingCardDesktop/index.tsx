import { bgColors } from '@/constant/colors'
import React from 'react'
import CarTopSectionDesktop from './CarTopSectionDesktop/CarTopSectionDesktop'
import CarBottomSectionDesktop from './CarBottomSectionDesktop'
import Divider from '@/component/ui/Divider/Divider';


let myBookingCard = {
    selectedCar: {
        img: "https://www.wticabs.com:3001/global/app/v1/aws/getImage/carimages/Dzire.png",
        model: "Toyota Prius or Similar"
    },
    bookingSummary: [
        {
            label: "Booking ID",
            value: "ORD1751362773688"
        },
        {
            label: "Booking Type",
            value: "ONE WAY"
        },
        {
            label: "Cab Category",
            value: "estate"
        },
        {
            label: "User Name",
            value: "akku"
        },
        {
            label: "Booking OTP",
            value: "5748"
        },
        {
            label: "Payment Status",
            value: "Fully Paid"
        }
    ],
    pickup: {
        address: "Heathrow Airport (LHR), Hounslow, UK",
        date: "2025-08-13",
        time: "10:30"
    },
    drop: {
        address: "Islington, London, UK",
        date: "2025-08-13",
        time: "11:36"
    },
    price: {
        amount: "12651.34",
        currency: "INR"
    }
}


const MyBookingCardDesktop = () => {
    return (
        <div className={`${bgColors.bgWhite} rounded-xl w-full p-4 `}>
            {/* top */}

            <CarTopSectionDesktop
                selectedCar={myBookingCard.selectedCar}
                summaryList={myBookingCard.bookingSummary}
            />

            {/* DIVIDER */}

            <Divider color={bgColors.bgDivider} />
            {/* bottom */}

            <CarBottomSectionDesktop
                bookingPrice={myBookingCard.price}
                pickup={myBookingCard.pickup} drop={myBookingCard.drop} />
        </div>
    )
}

export default MyBookingCardDesktop