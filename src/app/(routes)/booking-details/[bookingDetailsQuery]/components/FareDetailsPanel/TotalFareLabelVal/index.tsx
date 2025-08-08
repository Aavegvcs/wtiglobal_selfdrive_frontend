import Divider from '@/component/ui/Divider/Divider'
import { bgColors, textColors } from '@/constant/colors'
import React from 'react'

const TotalFareLabelVal = () => {
    return (
        <div className='flex flex-col mb-4'>
            <Divider color={bgColors.bgDivider} />
            <div className='flex justify-between items-center mb-2'>
                <span className={`${textColors.darkBlack} text-lg font-semibold`}>Total</span>
                <span className={`${textColors.darkBlack} text-lg font-semibold`}>AED 300</span>
            </div>
            <Divider color={bgColors.bgDivider} />
        </div>
    )
}

export default TotalFareLabelVal