import { DateTime } from "luxon"
import { generateTimeSlab } from "../helpsFunc"
import { SelectedTime } from "../types/types"
import { useEffect } from "react"



type useGenerateDropTimeSlabsProps = {
    endDate: Date
    minDate: SelectedTime,
    timeZone: string
    dropTime: SelectedTime,
    setDropTime: (val: SelectedTime) => void
}


const useGenerateDropTimeSlabs = ({
    endDate,
    minDate,
    dropTime,
    timeZone,
    setDropTime

}: useGenerateDropTimeSlabsProps) => {


    const dropTimeLuxon = DateTime.fromISO(dropTime?.time).setZone(dropTime.timeZone);

    const dateOfSlabs = DateTime.fromObject(
        {
            year: endDate.getFullYear(),
            month: endDate.getMonth() + 1,
            day: endDate.getDate(),
            hour: 0,
            minute: 0,
        },
        {
            zone: timeZone
        }
    );




    console.log(endDate, "useGenerateDropTimeSlabs")




    useEffect(() => {
        const dropYear = dateOfSlabs.year!;
        const dropMonth = dateOfSlabs.month!;
        const dropDay = dateOfSlabs.day!;

        const dropTimeTemp = dropTimeLuxon.set({
            year: dropYear,
            month: dropMonth,
            day: dropDay,
        });

        const newDropTime = {
            time: dropTimeTemp.toISO()!,
            timeZone: dropTimeTemp.zoneName!,
        };
        setDropTime(newDropTime);
    }, []);


    const allTimeSlabs: SelectedTime[] = generateTimeSlab({ date: dateOfSlabs, timeZone: dateOfSlabs.zoneName! })
    return {
        dropTimeSlabs: allTimeSlabs
    }
}

export default useGenerateDropTimeSlabs