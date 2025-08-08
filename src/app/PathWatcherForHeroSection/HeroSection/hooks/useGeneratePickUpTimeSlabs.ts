import { DateTime } from 'luxon'
import  { useEffect } from 'react'
import { filterTimeSlabs, generateTimeSlab } from '../helpsFunc'
import { SelectedTime } from '../types/types'

type useGeneratePickUpTimeSlabsProps = {
    startDate: Date
    minDate: SelectedTime,
    timeZone: string
    pickupTime: SelectedTime,
    setPickupTime: (val: SelectedTime) => void
}

const useGeneratePickUpTimeSlabs = ({
    startDate,
    minDate,
    pickupTime,
    timeZone,
    setPickupTime
}: useGeneratePickUpTimeSlabsProps) => {

    const mindDateLuxon = DateTime.fromISO(minDate?.time).setZone(minDate.timeZone);
    const pickupTimeLuxon = DateTime.fromISO(pickupTime?.time).setZone(pickupTime.timeZone);


    const dateOfSlabs = DateTime.fromObject(
        {
            year: startDate && startDate.getFullYear(),
            month: startDate && startDate.getMonth() + 1,
            day: startDate && startDate.getDate(),
            hour: 0,
            minute: 0,
        },
        {
            zone: timeZone
        }
    );

    useEffect(() => {
        const newPickTime = {
            time: mindDateLuxon.toISO()!,
            timeZone: mindDateLuxon.zoneName!,
        };
        if (pickupTimeLuxon < mindDateLuxon) {
            setPickupTime(newPickTime);
        }
    }, [pickupTimeLuxon]);


    // eslint-disable-next-line no-console
    useEffect(() => {
        const pickUpYear = dateOfSlabs.year!;
        const pickUpMonth = dateOfSlabs.month!;
        const pickUpDay = dateOfSlabs.day!;

        const pickTimeTemp = pickupTimeLuxon.set({
            year: pickUpYear,
            month: pickUpMonth,
            day: pickUpDay,
        });

        const newPickTime = {
            time: pickTimeTemp.toISO()!,
            timeZone: pickTimeTemp.zoneName!,
        };

        setPickupTime(newPickTime);
    }, [startDate]);



    const allTimeSlabs: SelectedTime[] = generateTimeSlab({ date: dateOfSlabs, timeZone: dateOfSlabs.zoneName! })


    return {
        pickupTimeSlabs: allTimeSlabs
    }
}

export default useGeneratePickUpTimeSlabs