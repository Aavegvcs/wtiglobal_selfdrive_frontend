import React from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import TileHeading from '../TileHeading'
import { bgColors, textColors } from '@/constant/colors'
import { MdOutlinePayment } from 'react-icons/md'
import { carOverviewData } from '@/data/data'
import Divider from '@/component/ui/Divider/Divider'


const CarOverviewTile = () => {
    return (
        <div className='mb-6'>
            <BookingDetailTileWrapper padding='py-6 px-5'>
                <div className='flex flex-col'>
                    <TileHeading title={`Car Overview`} />
                    <div className=' grid grid-cols-2 gap-3 w-full'>
                        {
                            carOverviewData.map((el, i) => {
                                return <div className='flex flex-col' key={i}>
                                    <div className='flex justify-between items-center' >
                                        <div className='flex gap-1.5 items-center'>
                                            <MdOutlinePayment />
                                            <span className={`${textColors.lightBlack} text-sm font-normal`}>{el.label}</span>
                                        </div>
                                        <button className={`bg-transparent ${textColors.lightGray} text-sm font-medium`}>{el.value}</button>
                                    </div>
                                    <Divider color={bgColors.bgDivider} />
                                </div>
                            })
                        }


                    </div>
                </div>
            </BookingDetailTileWrapper>
        </div>
    )
}

export default CarOverviewTile