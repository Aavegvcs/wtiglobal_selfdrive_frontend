import React from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import TileHeading from '../TileHeading'
import { bgColors, textColors } from '@/constant/colors'
import { IoMdCheckboxOutline } from 'react-icons/io'
import Divider from '@/component/ui/Divider/Divider'

const InsuranceOptionTile = () => {
    return (
        <div className='mb-6'>
            <BookingDetailTileWrapper tileBgColor={bgColors.bgLightFadeGreen} padding='py-6 px-5'>
                <div className='flex flex-col'>
                    <TileHeading title={`Insurance Options`} />
                    <div className='flex flex-col'>
                        <div className='flex items-start gap-1.5'>
                            <IoMdCheckboxOutline className={`${textColors.textGreen} text-lg`} />
                            <div className='flex flex-col'>
                                <span className={`${textColors.lightBlack} text-sm font-medium`}>Free Cancellation up to 48 hours before pickup</span>
                            </div>
                        </div>
                    </div>
                    <Divider color={bgColors.bgDivider} />
                    <div className='flex flex-col'>
                        <div className='flex items-start  gap-1.5'>
                            <IoMdCheckboxOutline className={`${textColors.textGreen} text-lg`} />
                            <div className='flex flex-col'>
                                <span className={`${textColors.lightBlack} text-sm font-medium`}>Available for your dates</span>
                                <span className={`${textColors.lightGray} text-sm font-medium`}>Get instant booking confirmation from a rental company</span>
                            </div>
                        </div>
                    </div>
                </div>
            </BookingDetailTileWrapper>
        </div>
    )
}

export default InsuranceOptionTile