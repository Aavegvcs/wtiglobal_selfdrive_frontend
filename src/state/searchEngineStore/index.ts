import { LocationFieldI } from "@/app/PathWatcherForHeroSection/HeroSection/types/types"
import { timeSlabList } from "@/constant/constant.maps"
import { getCurrentTime } from "@/utils/DateHelper/utils.date"
import { Range } from "react-date-range"
import { create } from "zustand"
import { devtools } from "zustand/middleware"

type State = {
    source: LocationFieldI,
    selectedDateRange: Range,
    pickuptime: string,
    droptime: string,
    totalMonthDuration: number,
    minDate: Date,
    pickupDateForMonth: Date
}


type Actions = {
    addSourceAction: (source: LocationFieldI) => void,
    addSelectedDateRangeAction: (dateRangeVal: Range) => void,
    addPickupTimeAction: (pickuptime: string) => void
    addDropTimeAction: (pickuptime: string) => void
    addSelectedMonthAction: (pickuptime: string) => void
    addMinDateAction: (minDagte: Date) => void
    addPickupDateForMonthAction: (pickupDateForMonth: Date) => void
    addtotalMonthDurationAction: (totalMonth: number) => void
}

export const searchEngineStore = create<State & Actions>()(devtools((set) => ({
    source: null,
    selectedDateRange: {
        startDate: getCurrentTime().toJSDate(),
        endDate: getCurrentTime().plus({ day: 1 }).toJSDate(),
        key: 'selection',
    },
    pickuptime: timeSlabList[20].value,
    droptime: timeSlabList[20].value,
    totalMonthDuration: 3,
    minDate: new Date(),
    pickupDateForMonth: new Date(),

    // actions
    addSourceAction: (source: LocationFieldI) => set({ source }),

    addSelectedDateRangeAction: (dateRangeVal) =>
        set({ selectedDateRange: dateRangeVal }),

    addPickupTimeAction: (pickuptime: string) => set({ pickuptime }),

    addDropTimeAction: (droptime: string) => set({ droptime }),
    addMinDateAction: (mindate) => set({ minDate: mindate }),
    addtotalMonthDurationAction: (totalMonth: number) => set({ totalMonthDuration: totalMonth }),
    addPickupDateForMonthAction: (pickDate: Date) => set({ pickupDateForMonth: pickDate })

}),
    { name: "SearchEngineStore" }
))



