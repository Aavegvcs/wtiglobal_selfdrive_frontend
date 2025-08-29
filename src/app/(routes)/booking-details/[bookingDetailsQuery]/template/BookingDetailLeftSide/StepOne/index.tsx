import { bgColors } from '@/constant/colors'
import React from 'react'
import CarImageCatalogDesktop from '../../../components/CarImageCatalogDesktop'
import PrieTagTile from '../../../components/PrieTagTile'
import BookingDetailsQueryTile from '../../../components/BookingDetailsQueryTile'
import CarOverviewTile from '../../../components/CarOverviewTile'
import RentalPoliciesTile from '../../../components/RentalPoliciesTile'
import InsuranceOptionTile from '../../../components/InsuranceOptionTile'
import ComprehensiveInsuranceTile from '../../../components/ComprehensiveInsuranceTile'
import ImportantInfoTile from '../../../components/ImportantInfoTile'
import PickupMethodSelectorTile from '../../../components/PickupMethodSelectorTile'
import { useBookingDetailsStore } from '@/state/useBookingDetailsStore'
import { BookingDetailsI } from '@/types/interface'
import { TariffForSingleInventoryI } from '@/types/helper.interface'

interface StepOneProps {
    carImage: string[]
    carModelName: string

}


const StepOne = ({ carImage, carModelName, }: StepOneProps) => {
    const addSelectedTariffAction: BookingDetailsI = useBookingDetailsStore((store) => store.addSelectedTariffAction);

    const signleBookingDetails: BookingDetailsI = useBookingDetailsStore((store) => store.signleBookingDetails);




    const selectedTariff: TariffForSingleInventoryI | null = useBookingDetailsStore((store) => store.selectedTariff);


    const tarrifs = signleBookingDetails?.tarrifs ?? [];

    const overrun_cost_per_km = signleBookingDetails?.overrun_cost_per_km ?? 0;


    return (
        <>

            <div className='p-6'>
                <CarImageCatalogDesktop
                    carModelName={carModelName}
                    carImage={carImage} />
                <PrieTagTile
                    selectedTariff={selectedTariff}
                    tarrifs={tarrifs || []}
                    addSelectedTariffAction={addSelectedTariffAction}
                    overRunfCost={overrun_cost_per_km}

                />
                <BookingDetailsQueryTile selectedTariff={selectedTariff} />
                <CarOverviewTile />
                <RentalPoliciesTile />
                <InsuranceOptionTile />
                <ComprehensiveInsuranceTile />
                <ImportantInfoTile />
            </div>
            <PickupMethodSelectorTile />
        </>
    )
}

export default StepOne