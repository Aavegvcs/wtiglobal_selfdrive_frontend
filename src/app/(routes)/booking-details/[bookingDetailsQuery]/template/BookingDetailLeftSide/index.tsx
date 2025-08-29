import React from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import { bgColors } from '@/constant/colors'
import { useBookingDetailsStore } from '@/state/useBookingDetailsStore'
import { BookingDetailsI } from '@/types/interface'


interface BookingDetailLeftSideProps {
    bookingStep: number
}

const BookingDetailLeftSide = ({ bookingStep }: BookingDetailLeftSideProps) => {
    const signleBookingDetails: BookingDetailsI = useBookingDetailsStore((store) => store.signleBookingDetails);
    const carImage: string[] = signleBookingDetails?.vehicle_id?.images ?? [];
    const carModelName = signleBookingDetails?.vehicle_id?.model_name ?? ""

    return (

        <div className={`flex flex-col  ${bgColors.bgWhite} rounded-xl`}>
            { bookingStep === 1 && <StepOne carImage={carImage} carModelName={carModelName} /> }
            
            { bookingStep === 2 && <StepTwo carImage={carImage} carModelName={carModelName} />}


        </div>

    )
}

export default BookingDetailLeftSide