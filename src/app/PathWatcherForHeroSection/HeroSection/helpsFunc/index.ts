import { DateTime } from "luxon";
import { inventryPayloadMakerHelperT, InventryQueryT, SelectedTime } from "../types/types";
import { dateFormat } from "@/utils/DateHelper/utils.date";
import { tripTripMap } from "@/constant/constant.maps";


export const generateTimeSlab = ({ date, timeZone }: { date: DateTime, timeZone: string }): SelectedTime[] => {
    const startDate = date.set({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
    });
    const slots = [];

    for (let i = 0; i < 48; i++) {
        const slot = startDate.plus({ minutes: i * 30 });

        if (slot) {

            slots.push({
                time: slot.toISO()!,
                timeZone: timeZone,
            });
        }
    }

    return slots;
}


export const filterTimeSlabs = ({ allTimeSlabs = [], minimumTime }: { allTimeSlabs: SelectedTime[], minimumTime: DateTime }) => {
    if (!Array.isArray(allTimeSlabs)) {
        console.error("Expected allTimeSlabs to be an array");
        return [];
    }

    return allTimeSlabs.filter((item) => {
        const slabTimeLuxon = DateTime.fromISO(item.time).setZone(item.timeZone);
        return slabTimeLuxon.toMillis() >= minimumTime.toMillis();
    });
};




export const getInventryPayloadMakerHelper = ({ source, pickup, drop, minDate, plan_type, vehicle_class, duration_months }: inventryPayloadMakerHelperT) => {





    const query: InventryQueryT = {
        source: source,
        pickup: {
            date: pickup && dateFormat(pickup.date),
            time: pickup.time
        },
        drop: {
            date: dateFormat(drop.date),
            time: drop.time
        },
        minDate: dateFormat(minDate),
        plan_type: plan_type,
        vehicle_class: vehicle_class
    }

    if (plan_type === tripTripMap.MONTHLY_RENTAL.code) {
        query.duration_months = duration_months
    }



    return query;
}