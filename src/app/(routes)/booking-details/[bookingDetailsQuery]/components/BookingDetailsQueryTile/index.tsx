import React from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import TileHeading from '../TileHeading'
import { IoLocationOutline } from 'react-icons/io5'
import { bgColors, textColors } from '@/constant/colors'
import Divider from '@/component/ui/Divider/Divider'
import { RiCalendarScheduleLine } from 'react-icons/ri'

const BookingDetailsQueryTile = () => {
    return (
        <div className='mb-6'>
            <BookingDetailTileWrapper padding='py-6 px-5'>
                <div className='flex flex-col'>
                    <TileHeading title={`Booking Details`} />

                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-1'>
                            <IoLocationOutline className={`${textColors.lightGray} text-lg`} />
                            <p className={`${textColors.lightBlack} text-sm`}>
                                <span>City - <span className='font-bold'>DUBAI</span></span> ,
                                <span className={`${textColors.lightPurple}`}>Daily Car Rentals</span>
                            </p>
                        </div>
                        <Divider color={bgColors.bgDivider} />
                        <div className='flex items-center gap-1'>
                            <RiCalendarScheduleLine className={`${textColors.lightGray} text-lg`} />
                            <p className={`${textColors.lightBlack} text-sm`}>
                                <React.Fragment>
                                    <span className={`font-semibold`}>10 June 2025</span> ,
                                    <span>10:00hrs</span>

                                </React.Fragment> -
                                <React.Fragment>
                                    <span className={`font-semibold`}>14 June 2025</span> ,
                                    <span>10:00hrs</span>

                                </React.Fragment>
                            </p>
                        </div>
                    </div>

                </div>
            </BookingDetailTileWrapper>
        </div>
    )
}

export default BookingDetailsQueryTile