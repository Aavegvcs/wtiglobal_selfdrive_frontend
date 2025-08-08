import { DateTime } from "luxon";
import { SelectedTime } from "../types/types";


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