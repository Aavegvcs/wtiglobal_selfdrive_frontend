import React from 'react'
import FareDetailsPanel from '../../components/FareDetailsPanel'
import { TariffForSingleInventoryI } from '@/types/helper.interface'

export interface BookingDetailRightSideProps {
  
    selectedTariff: TariffForSingleInventoryI
    nextStepAction: () => void
    bookingStep : number
}

const BookingDetailRightSide = ({ selectedTariff, nextStepAction , bookingStep  }: BookingDetailRightSideProps) => {
    return (
        <>
            < FareDetailsPanel  selectedTariff={selectedTariff} nextStepAction={nextStepAction} bookingStep ={bookingStep} />
        </>
    )
}

export default BookingDetailRightSide