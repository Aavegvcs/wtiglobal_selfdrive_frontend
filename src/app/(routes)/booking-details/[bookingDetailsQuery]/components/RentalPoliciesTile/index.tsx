import React from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import TileHeading from '../TileHeading'
import Image from 'next/image'
import { rentalPolicyList } from '@/data/data'
import { bgColors, textColors } from '@/constant/colors'
import Divider from '@/component/ui/Divider/Divider'

const RentalPoliciesTile = () => {
    return (
        <div className='mb-6'>
            <BookingDetailTileWrapper padding='py-6 px-5'>
                <div className='flex flex-col'>
                    <TileHeading title={`Rental Policies`} />
                    {
                        rentalPolicyList.map((el, i) => {
                            const isNotLast: boolean = rentalPolicyList.length - 1 !== i;
                            return <div className='flex flex-col gap-0.5' key={i}>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-1.5 items-center'>
                                        <Image src={el.icon} width={16} alt='' />
                                        <span className={`${textColors.lightBlack} text-[16px] font-normal`}>{el.text}</span>
                                    </div>
                                    <button className={`bg-transparent ${textColors.lightPurple} text-[16px] font-medium`}>View Details</button>
                                </div>
                                {
                                    isNotLast && <Divider color={bgColors.bgDivider} />
                                }

                            </div>

                        })
                    }
                </div>
            </BookingDetailTileWrapper>
        </div>
    )
}

export default RentalPoliciesTile