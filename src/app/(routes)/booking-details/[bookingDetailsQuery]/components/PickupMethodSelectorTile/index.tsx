 
 import { bgColors } from '@/constant/colors'
import React from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import TileHeading from '../TileHeading'
import PickupOption from './PickupOption'

const PickupMethodSelectorTile = () => {


    return (
        <div className='flex flex-col w-full mb-6'>
            <BookingDetailTileWrapper tileBgColor={bgColors.bgFogWhite} borderRadius='' padding='px-6 py-5'>
                <div className='flex flex-col'>
                    <TileHeading title={`How do you want to pick up your car?`} />
                    <div className='grid grid-cols-[0.8fr_1.2fr] gap-8'>
                        {/* Google Map */}
                        <div
                        ></div>

                        <PickupOption />
                    </div>
                </div>
            </BookingDetailTileWrapper>
        </div>
    )
}

export default PickupMethodSelectorTile