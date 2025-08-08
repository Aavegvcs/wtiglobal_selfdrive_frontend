import React from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import { bgColors, textColors } from '@/constant/colors'
import Divider from '@/component/ui/Divider/Divider'

// type PrieTagTileProps = {

// }

const PrieTagTile = ({ }) => {
    return (

        <div className='flex flex-col w-full mb-6'>
            <BookingDetailTileWrapper tileBgColor={bgColors.bgGray} borderRadius='rounded-t-sm' padding='p-2'>
                <div className='flex flex-col'>
                    {/* PRICE STRIPE */}
                    <div className='grid grid-cols-3 gap-2 '>
                        <div className='flex items-center flex-col bg-white rounded-sm py-3 px-3 shadow-[0px_4px_4px_0px_#0000001F]'>
                            <h4 className={`text-2xl font-medium ${textColors.textBlue}`}>
                                AED 239
                            </h4>
                            <span className={`font-normal text-[16px] ${textColors.lightGray}`}>per day</span>
                        </div>
                        <div className='flex items-center flex-col bg-transparent rounded-lg py-3 px-3'>
                            <h4 className={`text-2xl font-medium ${textColors.lightBlack}`}>
                                AED 239
                            </h4>
                            <span className={`font-normal text-[16px] ${textColors.lightGray}`}>per day</span>
                        </div>
                        <div className='flex items-center flex-col bg-transparent rounded-lg py-3 px-3'>
                            <h4 className={`text-2xl font-medium ${textColors.lightBlack}`}>
                                AED 239
                            </h4>
                            <span className={`font-normal text-[16px] ${textColors.lightGray}`}>per day</span>
                        </div>
                    </div>

                    {/*  */}

                </div>
            </BookingDetailTileWrapper >

            <BookingDetailTileWrapper borderRadius='rounded-b-sm' padding='p-4'>
                <div className=''>
                    <div className='flex justify-between items-center'>
                        <span className={`text-[16px] ${textColors.lightBlack} font-medium`}>Included mileage limit</span>
                        <span className={`text-[16px] ${textColors.lightBlack} font-medium`}>250 km</span>
                    </div>
                    <Divider color={bgColors.bgDivider} />
                    <div className='flex justify-between items-center'>
                        <span className={`text-[16px] ${textColors.lightBlack} font-medium`}>Additional mileage charge</span>
                        <span className={`text-[16px] ${textColors.lightBlack} font-medium`}>AED 5/km</span>
                    </div>
                </div>
            </BookingDetailTileWrapper>
        </div>
    )
}

export default PrieTagTile