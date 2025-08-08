import React from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import { bgColors, textColors } from '@/constant/colors'
import TileHeading from '../TileHeading'
import { IoShieldHalfOutline } from 'react-icons/io5'


const ComprehensiveInsuranceTile = () => {
    return (
        <>
            <div className='mb-6'>
                <BookingDetailTileWrapper tileBgColor={bgColors.bgWhite} padding='p-0'>
                    <div className='flex flex-col'>
                        <TileHeading title={`Comprehensive Insurance`} />
                        <div className='flex flex-col'>
                            <div className='flex items-start gap-1.5'>

                                <IoShieldHalfOutline className={`${textColors.lightBlack} text-lg`} />
                                <div className='flex flex-col'>
                                    <span className={`${textColors.lightBlack} text-sm font-medium`}>Excess amount of 1000-1500 AED. More</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </BookingDetailTileWrapper>
            </div>

        </>
    )
}

export default ComprehensiveInsuranceTile