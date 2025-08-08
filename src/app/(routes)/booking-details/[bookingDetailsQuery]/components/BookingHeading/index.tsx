import { textColors } from '@/constant/colors'
import React from 'react'
import { IoArrowBack } from 'react-icons/io5'

const BookingHeading = () => {
    return (
        <div className='flex items-center gap-2 mb-8'>
            <button className={`flex items-center font-semibold  gap-1 py-1 px-4 rounded-xl border border-[#7878FF]  ${textColors.lightPurple} `}>
                <IoArrowBack />
                Back
            </button>
            <React.Fragment>
                <div className='flex gap-2 items-baseline-last'>
                    <p className={` text-sm ${textColors.darkGray}`}>
                        <span className={`${textColors.lightGray} text-sm font-normal`}>Step 1 of 2 :</span>
                    </p>
                    <h3 className={`${textColors.darkBlack} font-semibold text-xl`}>Book your car</h3>
                </div>
            </React.Fragment>
        </div>
    )
}

export default BookingHeading