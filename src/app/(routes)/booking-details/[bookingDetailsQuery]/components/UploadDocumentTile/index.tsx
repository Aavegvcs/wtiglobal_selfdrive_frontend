import React from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper';
import { bgColors } from '@/constant/colors';


const UploadDocumentTile = () => {
















    const items= [
        {
            key: "RESIDENT",
            label: "Emirates Resident",
            children:""
        },
        {
            key: "TOURIST",
            label: "Tourist",
            children: ""
        }
    ]







    return <>

        <div className='mb-6'>
            <BookingDetailTileWrapper tileBgColor={bgColors.bgTransparent} padding='py-6 px-0'>
                <div className='flex flex-col'>
                  
                </div>
            </BookingDetailTileWrapper>
        </div>
    </>;
}

export default UploadDocumentTile