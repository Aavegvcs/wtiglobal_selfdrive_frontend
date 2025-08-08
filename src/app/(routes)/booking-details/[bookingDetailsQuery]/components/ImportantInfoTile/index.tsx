"use client"

import React, { useState } from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import { bgColors, textColors } from '@/constant/colors'
import TileHeading from '../TileHeading'
import { Modal } from 'antd'
import Image from 'next/image'
import { importantInfoData } from '@/data/data'
import Divider from '@/component/ui/Divider/Divider'
import { ImportantInfoItemI } from '@/types/interface'

const ImportantInfoTile = () => {

    const [activeModalWithData, setActiveModalWithData] = useState<ImportantInfoItemI | null>(null);

    const showModal = (infoItem: ImportantInfoItemI) => {
        setActiveModalWithData(infoItem);
    };
    const hideModal = () => {
        setActiveModalWithData(null);
    };


    return (
        <div className='mb-6'>
            <BookingDetailTileWrapper tileBgColor={bgColors.bgWhite} padding='p-0'>
                <div className='flex flex-col'>
                    <TileHeading title={`Important Info`} />
                    {
                        importantInfoData.map((el, i) => {
                            const isNotLast: boolean = importantInfoData.length - 1 !== i;
                            return <div className='flex flex-col' key={i}>
                                <div className='flex items-start justify-between gap-1.5'>
                                    <div className='flex items-center gap-1'>
                                        <Image src={el.icon} width={16} alt='' />
                                        <span className={`${textColors.lightBlack} text-[16px] font-normal`}>{el.label}</span>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <span className={`${textColors.lightBlack} font-medium text-[16px]`}>{el.value}</span>
                                        <button onClick={() => showModal(el)} className={`bg-transparent ${textColors.lightPurple} cursor-pointer text-sm font-medium`}>{el.linkText}</button>
                                    </div>


                                </div>
                                {
                                    isNotLast && <Divider color={bgColors.bgDivider} />
                                }

                            </div>
                        })
                    }

                </div>
            </BookingDetailTileWrapper>

            <Modal
                title={!!activeModalWithData && activeModalWithData.label}
                centered ={true}
                open={!!activeModalWithData}
                onCancel={hideModal}
                footer={null}
            >
                {
                    !!activeModalWithData && <div>{activeModalWithData.modalContent}</div>
                }
            </Modal>
        </div>
    )
}

export default ImportantInfoTile