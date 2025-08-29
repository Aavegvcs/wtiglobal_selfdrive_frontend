import { carRentalLlocationList } from '@/data/data';
import { ApiResponse } from '@/types/ApiResponse';
import { CarRentalLocationResultI, ChipsOptionI } from '@/types/interface';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react'
import { getCarRentalLocationOnCountryService } from '../services/home.services';

const useGetCarRentalLocation = () => {
    const [selectedCarRentalLocation, setSelectedCarRentalLocation] = useState<ChipsOptionI>(carRentalLlocationList[0]);
    const onSelectHandler = (valueChip: ChipsOptionI) => setSelectedCarRentalLocation(valueChip);

    const { isLoading, data, error } = useQuery<ApiResponse<CarRentalLocationResultI>, Error>({
        queryKey: ["getCarRentalLocationOnCountry", selectedCarRentalLocation?.value],
        queryFn: () => getCarRentalLocationOnCountryService(selectedCarRentalLocation?.value),
        enabled: !!selectedCarRentalLocation?.value
    });


    return {
        selected: selectedCarRentalLocation,
        onSelectHandler: onSelectHandler,
        locationList: data?.result.data || [],
        heading: data?.result.tagline,
        isActive: data?.result.isActive,
        isLoading: isLoading,
        availableCountry: data?.result.availableInCountries,
        error: error
    }
}

export default useGetCarRentalLocation