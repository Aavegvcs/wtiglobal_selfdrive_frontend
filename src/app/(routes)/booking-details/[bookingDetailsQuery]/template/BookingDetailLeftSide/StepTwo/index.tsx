import React from 'react'
import CarImageCatalogDesktop from '../../../components/CarImageCatalogDesktop'
import CouponAndPromoTile from '../../../components/CouponAndPromoTile'
import HowContactYouTile from '../../../components/HowContactYouTile'
import AgeConfirmationTile from '../../../components/AgeConfirmationTile'
import UploadDocumentTile from '../../../components/UploadDocumentTile'

interface StepTwopProps {
    carImage: string[]
    carModelName: string,
}



const StepTwo = ({ carImage, carModelName }: StepTwopProps) => {
    return (
        <>
            <div className='p-6'>
                <CarImageCatalogDesktop
                    carImage={carImage}
                    carModelName={carModelName} />
                <CouponAndPromoTile />
                <HowContactYouTile />
                <UploadDocumentTile />
                <AgeConfirmationTile />
            </div>
        </>
    )
}

export default StepTwo