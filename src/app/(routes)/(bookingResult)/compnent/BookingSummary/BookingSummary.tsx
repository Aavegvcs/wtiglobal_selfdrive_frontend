import { textColors } from '@/constant/colors'
import { KeyValueI } from '@/types/interface'
import React from 'react'

interface BookingSummaryProps {
    summaryList: KeyValueI[]
}

const BookingSummary = ({ summaryList }: BookingSummaryProps) => {
    return (
        <div className='ps-5'>
            {
                Array.isArray(summaryList) && summaryList.map((el, i) => (
                    <div className='flex mb-3' key={i}>
                        <span className={`${textColors.lightGray} font-medium text-sm`}>{el.label}</span>
                        <span className={`${textColors.lightBlack} font-semibold text-sm`}>{el.value}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default BookingSummary