import { carRentalLlocationList } from '@/data/data';
import { ChipsOptionI } from '@/types/interface';
import { useState } from 'react'

const useGetCarRentalLocation = () => {
    const [selectedCarRentalLocation, setSelectedCarRentalLocation] = useState<ChipsOptionI | undefined>(carRentalLlocationList[0]);
    const onSelectHandler = (valueChip: ChipsOptionI) => setSelectedCarRentalLocation(valueChip);

    return {
        selected: selectedCarRentalLocation,
        onSelectHandler: onSelectHandler
    }
}

export default useGetCarRentalLocation