"use client";
import { InventryQueryT, LocationFieldI } from '@/app/PathWatcherForHeroSection/HeroSection/types/types';
import { tripTripMap } from '@/constant/constant.maps';
import { searchEngineStore } from '@/state/searchEngineStore'
import { parseDDMMYYYY } from '@/utils/DateHelper/utils.date';
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react';
import { Range } from 'react-date-range';


type UseKeepSearchEngineStoreInSyncProps = {
    tripType: number | undefined
    tripTypeHandler?: (val: number) => void
}

const useKeepSearchEngineStoreInSync = ({ tripType, tripTypeHandler }: UseKeepSearchEngineStoreInSyncProps) => {

    const addSourceAction = searchEngineStore((store) => store.addSourceAction)
    const addSelectedDateRangeAction = searchEngineStore((store) => store.addSelectedDateRangeAction)
    const addPickupTimeAction = searchEngineStore((store) => store.addPickupTimeAction)
    const addDropTimeAction = searchEngineStore((store) => store.addDropTimeAction)
    const addMinDateAction = searchEngineStore((store) => store.addMinDateAction)
    const addPickupDateForMonthAction = searchEngineStore((store) => store.addPickupDateForMonthAction)
    const addtotalMonthDurationAction = searchEngineStore((store) => store.addtotalMonthDurationAction)


    let dateRangeParam: Range;
    const queryParams = useSearchParams();
    const plan_type: number = Number(queryParams.get("plan_type"));

    const cityParam: string = queryParams.get("source_city")!;

    const countryCodeParam: string = queryParams.get("source_countryCode")!;
    const countryIdParam: string = queryParams.get("source_countryId")!;

    const pickupDate = queryParams.get("pickup_date");
    const dropDate = queryParams.get("drop_date");

    const pickupTime = queryParams.get("pickup_time");
    const dropTime = queryParams.get("drop_time");

    const minDate = parseDDMMYYYY(queryParams.get("minDate")!);

    const vehicle_class = queryParams.get("vehicle_class");
    const duration_months = queryParams.get("duration_months");



    const isTripDidChanged = plan_type !== tripType;
    const isMonthy = plan_type === tripTripMap.MONTHLY_RENTAL.code








    const sourceParam: LocationFieldI = {
        city: cityParam || "",
        countryCode: countryCodeParam || "",
        countryId: countryIdParam || ""
    }

    const parsedStart = pickupDate ? parseDDMMYYYY(pickupDate) : null;
    const parsedEnd = dropDate ? parseDDMMYYYY(dropDate) : null;




    if (!parsedStart || !parsedEnd) {
        console.warn("Invalid pickup/drop date");
        // Optionally return early or assign defaults
    } else {
        dateRangeParam = {
            startDate: parsedStart,
            endDate: parsedEnd,
            key: 'selection',
        };
    }



    useEffect(() => {
        addSourceAction(sourceParam);
        addSelectedDateRangeAction(dateRangeParam)
        addPickupTimeAction(pickupTime!)
        addDropTimeAction(dropTime!)
        addMinDateAction(minDate!)

        if (isMonthy && duration_months) {
            addtotalMonthDurationAction(Number(duration_months))
        }
        if (tripTypeHandler) {
            tripTypeHandler(plan_type)
        }

    }, [])


    useEffect(() => {

        if (isTripDidChanged && pickupDate) {

            if (parsedStart) {
                addPickupDateForMonthAction(parsedStart);
                addtotalMonthDurationAction(Number(1))
            } else {
                console.warn("Invalid pickup date string");
            }
        }

    }, [tripType])


    const payloadForAllInventroy: InventryQueryT = {
        source: sourceParam,
        pickup: {
            date: pickupDate!,
            time: pickupTime!
        },
        drop: {
            date: dropDate!,
            time: dropTime!
        },
        plan_type: plan_type,
        vehicle_class: vehicle_class!
    }

    if (plan_type === tripTripMap.MONTHLY_RENTAL.code) {
        payloadForAllInventroy.duration_months = Number(duration_months)!
    }




    return {
        payloadForAllInventroy: payloadForAllInventroy
    }
}

export default useKeepSearchEngineStoreInSync