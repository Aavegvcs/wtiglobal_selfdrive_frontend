"use client"
import React, { useState } from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import TileHeading from '../TileHeading'
import Image from 'next/image'
import { rentalPolicyList } from '@/data/data'
import { bgColors, textColors } from '@/constant/colors'
import Divider from '@/component/ui/Divider/Divider'
import { RentalPolicyItemT } from '@/types/types'
import { Box, Modal } from '@mui/material';
import { style } from '../../style'





const RentalPoliciesTile = () => {
    const [activeModalWithData, setActiveModalWithData] = useState<RentalPolicyItemT | null>(null);

    const showModal = (infoItem: RentalPolicyItemT) => {
        setActiveModalWithData(infoItem);
    };
    const hideModal = () => {
        setActiveModalWithData(null);
    };

    return (
        <>

            <div className='mb-6'>
                <BookingDetailTileWrapper padding='py-6 px-5'>
                    <div className='flex flex-col'>
                        <TileHeading title={`Rental Policies`} />
                        {
                            rentalPolicyList.map((el: RentalPolicyItemT, i) => {
                                const isNotLast: boolean = rentalPolicyList.length - 1 !== i;
                                return <div className='flex flex-col gap-0.5' key={i}>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-1.5 items-center'>
                                            <Image src={el.icon} width={16} alt='' />
                                            <span
                                                className={`${textColors.lightBlack} text-[16px] font-normal`}
                                            >
                                                {el.title}
                                            </span>
                                        </div>
                                        <button
                                            className={`bg-transparent ${textColors.lightPurple} text-[16px] font-medium cursor-pointer`}
                                            onClick={() => showModal(el)}
                                        >
                                            View Details
                                        </button>
                                    </div>

                                    {isNotLast && <Divider color={bgColors.bgDivider} />}
                                </div>

                            })
                        }
                    </div>
                </BookingDetailTileWrapper>
            </div>
            <Modal
                open={!!activeModalWithData}
                onClose={hideModal}
            >
                <Box sx={style} >
                    <div className='mb-2'>
                        <p className={`${textColors.extraLightGray} text-sm font-medium`}>{activeModalWithData?.body.description} </p>
                    </div>
                    <div className='flex-col gap-0.5 flex'>
                        {
                            activeModalWithData?.body.postulates.map((el, i) => {
                                return <div className='flex items-baseline gap-2' key={i}>
                                    <div className='flex justify-start'>
                                        <div className={`${bgColors.bgBlack} size-[8px] rounded-full`} >
                                        </div>
                                    </div>
                                    <div className={`${textColors.extraLightGray} text-sm font-medium`}  >{el}</div>
                                </div>
                            })}
                    </div>
                </Box>


            </Modal>
        </>
    )
}

export default RentalPoliciesTile