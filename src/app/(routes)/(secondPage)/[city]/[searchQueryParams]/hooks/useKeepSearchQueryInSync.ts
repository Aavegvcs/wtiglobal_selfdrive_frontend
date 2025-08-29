import { LocationFieldI } from '@/app/PathWatcherForHeroSection/HeroSection/types/types';
import { searchEngineStore } from '@/state/searchEngineStore';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const useKeepSearchQueryInSync = () => {

    const source = searchEngineStore((store) => store.source)
    const selectedDateRange = searchEngineStore((store) => store.selectedDateRange)
    const pickuptime = searchEngineStore((store) => store.pickuptime)
    const droptime = searchEngineStore((store) => store.droptime)
    const minDate = searchEngineStore((store) => store.minDate)


    const addSourceAction = searchEngineStore((store) => store.addSourceAction)
    const addSelectedDateRangeAction = searchEngineStore((store) => store.addSelectedDateRangeAction)
    const addPickupTimeAction = searchEngineStore((store) => store.addPickupTimeAction)
    const addDropTimeAction = searchEngineStore((store) => store.addDropTimeAction)





    // const queryParams = useSearchParams();
    // const cityParam: string = queryParams.get("city");
    // const countryCodeParam: string = queryParams.get("countryCode");
    // const countryIdParam: string = queryParams.get("countryId");

    // const sourceParam: LocationFieldI = {
    //     city: cityParam,
    //     countryCode: countryCodeParam,
    //     countryId: countryIdParam
    // }




    return {

    }
}

export default useKeepSearchQueryInSync