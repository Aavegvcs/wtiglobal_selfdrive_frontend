import { textColors } from '@/constant/colors'
import React from 'react'

type FareComponentLabelValProps = {
    label: string,
    val: string
}

const FareComponentLabelVal = ({ label, val }: FareComponentLabelValProps) => {
    return (
        <div className='flex justify-between items-center mb-2'>
            <span className={`${textColors.darkBlack} text-sm font-medium capitalize`}>{label}</span>
            <span className={`${textColors.darkBlack} text-sm font-semibold`}>{val}</span>
        </div>
    )
}

export default FareComponentLabelVal