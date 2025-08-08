import { bgColors } from '@/constant/colors'
import React from 'react'
import PrieTagTile from '../../components/PrieTagTile'
import BookingDetailsQueryTile from '../../components/BookingDetailsQueryTile'
import RentalPoliciesTile from '../../components/RentalPoliciesTile'
import InsuranceOptionTile from '../../components/InsuranceOptionTile'
import ComprehensiveInsuranceTile from '../../components/ComprehensiveInsuranceTile'
import ImportantInfoTile from '../../components/ImportantInfoTile'
import CarOverviewTile from '../../components/CarOverviewTile'
import CarImageCatalogDesktop from '../../components/CarImageCatalogDesktop'
import PickupMethodSelectorTile from '../../components/PickupMethodSelectorTile'


const BookingDetailLeftSide = () => {
    return (
        <div className={`flex flex-col  ${bgColors.bgWhite} rounded-xl`}>
            <div className='p-6'>
                <CarImageCatalogDesktop />
                <PrieTagTile />
                <BookingDetailsQueryTile />
                <CarOverviewTile />
                <RentalPoliciesTile />
                <InsuranceOptionTile />
                <ComprehensiveInsuranceTile />
                <ImportantInfoTile />
            </div>
            <PickupMethodSelectorTile />

        </div>
    )
}

export default BookingDetailLeftSide