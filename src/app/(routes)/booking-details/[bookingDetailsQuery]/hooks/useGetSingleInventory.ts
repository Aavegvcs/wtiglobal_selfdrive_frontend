"use client";
import { useQuery } from '@tanstack/react-query'
import { getSingleInvertoryService } from '../services'
import { ApiResponse } from '@/types/ApiResponse'
import { BookingDetailsI } from '@/types/interface'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react';
import { useBookingDetailsStore } from '@/state/useBookingDetailsStore';

const useGetSingleInventory = () => {

    const addIsLoading = useBookingDetailsStore((store) => store.addIsLoading);
    const addSignleBookingDetailsAction = useBookingDetailsStore((store) => store.addSignleBookingDetailsAction);
    const addSelectedTariffAction = useBookingDetailsStore((store) => store.addSelectedTariffAction);

    const queryParams = useSearchParams();

    const queryObj = Object.fromEntries(queryParams.entries());



    const { isLoading, error, data } = useQuery<ApiResponse<BookingDetailsI>, Error>({
        queryKey: ["booking-details-car",],
        queryFn: () => getSingleInvertoryService(queryObj),
        enabled: Object.keys(queryObj).length > 0,
        staleTime: 0,
        
    })

    useEffect(() => {
        addIsLoading(isLoading)
        if (data?.result) {
            const bookingDetails: BookingDetailsI = data?.result
            addSignleBookingDetailsAction(data?.result)
            const selectedTariff = bookingDetails.tarrifs.find((el) => el.tariff_type === bookingDetails.tarrif_selected)
            if (selectedTariff) {
                addSelectedTariffAction(selectedTariff)
            }
        }
    }, [data])


    return {

    }
}

export default useGetSingleInventory