import { textColors } from '@/constant/colors'
import { KeyValueI } from '@/types/interface'
import React from 'react'


interface MyBookingSummaryDesktopProps {
    summaryList: KeyValueI[]
}

const MyBookingSummaryDesktop = ({ summaryList }: MyBookingSummaryDesktopProps) => {
    return (
        <div className='ps-5'>
            {
                Array.isArray(summaryList) && summaryList.map((el, i) => (
                    <div className='flex gap-1 mb-3' key={i}>
                        <span className={`${textColors.lightGray} font-medium text-sm`}>{el.label} :</span>
                        <span className={`${textColors.lightBlack} font-semibold text-sm`}>{el.value}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default MyBookingSummaryDesktop