"use client";
import { bgColors } from '@/constant/colors'
import React from 'react'
import FareTitleCard from './FareTitleCard'
import FareDetailPanelBtn from './FareDetailPanelBtn'
import FareComponentLabelVal from './FareComponentLabelVal';
import TotalFareLabelVal from './TotalFareLabelVal';
import { BookingDetailRightSideProps } from '../../template/BookingDetailRightSide';
import { splitAndJoint } from '@/utils/StringHelper';
import { userContactAndConsentStore } from '@/state/useContactAndConsentStore';

const FareDetailsPanel = ({ selectedTariff, nextStepAction, bookingStep }: BookingDetailRightSideProps) => {
    const fareDetails = selectedTariff && selectedTariff.fare_Details || {};


    const notShowInFareBreakUi = ["grand_total", "total"]

    const validateContact = userContactAndConsentStore((store) => store.validateContact);

    const onCheckoutHandler = () => {
        validateContact()
     }




    return (
        <div className={`${bgColors.bgWhite} p-4 rounded-lg sticky top-0 h-fit shadow-[0px_4px_12px_0px_#0000001F]`}>
            <FareTitleCard title='Fare Details' />
            {
                Object.entries(fareDetails).map(([key, val], i) => {

                    const modifiedKey: string = splitAndJoint(key, "_", " ");
                    return <div key={i}>
                        {!notShowInFareBreakUi.includes(key) && <FareComponentLabelVal label={`${modifiedKey}`} val={val} />}
                    </div>
                })
            }
            <TotalFareLabelVal totalPrice={selectedTariff && selectedTariff.fare_Details.grand_total} />

            {bookingStep === 1 && <FareDetailPanelBtn type="button" isDisabled={false} text={"Proceed"} onClick={nextStepAction} />}
            {bookingStep === 2 && <FareDetailPanelBtn type="submit" isDisabled={false} text={"Checkout"} onClick={onCheckoutHandler} />}


        </div>
    )
}

export default FareDetailsPanel