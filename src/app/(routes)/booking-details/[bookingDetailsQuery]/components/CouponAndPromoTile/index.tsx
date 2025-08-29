"use client";
import React from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import TileHeading from '../TileHeading'
import { bgColors, textColors } from '@/constant/colors'
import InputField from '@/component/ui/InputField/InputField'
import Button from '@/component/ui/Button/Button';

const CouponAndPromoTile = () => {
    return (
        <div className='mb-6'>
            <BookingDetailTileWrapper tileBgColor={bgColors.bgWhite} padding='p-0'>
                <div className='flex flex-col'>
                    <TileHeading title={`Coupons & Promo Codes`} />
                    <div className={`flex justify-between items-center ${bgColors.bgLightGray} rounded-xl`}>
                        <InputField
                            type='text'
                            bgColor={bgColors.bgTransparent}
                            value='' onChange={() => { }}
                            name='' border={""}
                            padding={"py-1 px-3"}
                            textSize={"text-[16px]"}
                            placeholder='Enter promo code' />
                        <Button
                            title='Apply'
                            onClick={() => { }}
                            padding={"py-3 px-4"}
                            textSize={"text-[16px]"}
                            textColor={textColors.lightGray}
                            bgColor={bgColors.bgTransparent}
                        />
                    </div>
                </div>
            </BookingDetailTileWrapper>
        </div>
    )
}

export default CouponAndPromoTile