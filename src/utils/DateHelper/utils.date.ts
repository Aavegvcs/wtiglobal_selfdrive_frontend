
import lodash from "lodash";

import { DateTime } from "luxon"

export const getRoundOfTime = ({ time }: { time: DateTime }): DateTime => {
    const minutes = time.minute;
    if (minutes < 30) {
        return time.set({ minute: 30, second: 0, millisecond: 0 });
    } else {
        return time.plus({ hours: 1 }).set({ minute: 0, second: 0, millisecond: 0 });
    }
}


export const getCurrentTime = (): DateTime => {
    const currentTime = DateTime.local().plus({ hour: 12 });
    return getRoundOfTime({ time: currentTime });
}





export const dateFormat = (date: unknown): string => {
    if (!lodash.isDate(date)) {
        console.warn("INVALID DATE");
        return "";
    }

    const dateTemp = DateTime.fromJSDate(date);
    return dateTemp.toFormat("dd/LL/yyyy"); // or use "DD" if you prefer localized
};


export const timeIn24HourFormat = ({ time, timeZone }: { time: string, timeZone: string }): string => {

    if (lodash.isEmpty(time)) {
        return "";
    }

    try {
        return DateTime.fromISO(time).setZone(timeZone).toFormat("t");
    } catch (error) {
        console.error("Invalid time or timezone", error);
        return "";
    }
}





