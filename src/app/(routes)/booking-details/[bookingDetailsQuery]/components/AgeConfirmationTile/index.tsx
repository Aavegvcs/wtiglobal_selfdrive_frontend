"use client";
import React from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import { bgColors, textColors } from '@/constant/colors'
import TileHeading from '../TileHeading'
// import { Checkbox } from 'antd'

const AgeConfirmationTile = () => {

    const onChange = () => { }
    return (
        <>
            <div className='mb-6'>
                <BookingDetailTileWrapper tileBgColor={bgColors.bgWhite} padding='p-0'>
                    <div className='flex flex-col'>
                        <TileHeading title={`Age Confirmation`} />
                        <div className={`flex items-center ${bgColors.bgTransparent} rounded-xl`}>
                            <div className='flex flex-col gap-2'>
                                {/* <Checkbox onChange={onChange}> */}
                                    <span className={`${textColors.lightBlack} font-normal text-sm`}>I confirm my age is above 25 years</span>
                                {/* </Checkbox> */}
                                {/* <Checkbox onChange={onChange}> */}
                                    <span className={`${textColors.lightBlack} font-normal text-sm`}>I confirm my driving experience is above 6 months</span>
                                {/* </Checkbox> */}
                                {/* <Checkbox onChange={onChange}> */}
                                    <span className={`${textColors.lightBlack} font-normal text-sm`}>By Pressing Book, you confirm you’ve read and agreed to <span className={`${textColors.lightPurple}`}>Terms of Use</span> and acknowledge the <span className={`${textColors.lightPurple}`}>Privacy Notice</span></span>
                                {/* </Checkbox/> */}
                            </div>
                        </div>
                    </div>
                </BookingDetailTileWrapper>
            </div>

        </>
    )
}

export default AgeConfirmationTile