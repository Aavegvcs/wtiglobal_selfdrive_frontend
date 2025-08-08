"use client";
import { bgColors } from '@/constant/colors'
import React from 'react'
import FareTitleCard from './FareTitleCard'
import FareDetailPanelBtn from './FareDetailPanelBtn'
import FareComponentLabelVal from './FareComponentLabelVal';
import TotalFareLabelVal from './TotalFareLabelVal';

const FareDetailsPanel = () => {
    return (
        <div className={`${bgColors.bgWhite} p-4 rounded-lg sticky top-0 h-fit shadow-[0px_4px_12px_0px_#0000001F]`}>
            <FareTitleCard title='Fare Details' />
            <FareComponentLabelVal label='Rental Price for 3 days' val='AED 240' />
            <FareComponentLabelVal label='Rental Price for 3 days' val='AED 240' />
            <FareComponentLabelVal label='Rental Price for 3 days' val='AED 240' />
            <FareComponentLabelVal label='Rental Price for 3 days' val='AED 240' />
            <TotalFareLabelVal />
            <FareDetailPanelBtn isDisabled={false} text={"Proceed"} onClick={() => { }} />
            <FareDetailPanelBtn isDisabled={false} text={"Checkout"} onClick={() => { }} />
        </div>
    )
}

export default FareDetailsPanel