import Divider from '@/component/ui/Divider/Divider'
import { bgColors, textColors } from '@/constant/colors'
import { timeIn24HourFormat } from '@/utils/DateHelper/utils.date'
import { DateTime } from 'luxon'
import { SelectedTime } from "@/app/PathWatcherForHeroSection/HeroSection/types/types"
import React from 'react'



type CategorizedSlots = {
    [category: string]: {
        time: string;
        timeZone: string;
    }[];
};


type TimeSlabListProps = {
    timeSlabList: SelectedTime[],
    minDate: SelectedTime,
    onSelect: (val: SelectedTime) => void

}

const categorizeTimeSlots = ({ slabs = [] }: { slabs: SelectedTime[] }) => {
    const categories: CategorizedSlots = {
        "Morning Time": [],
        "Evening Time": [],
    }


    slabs.forEach((el: SelectedTime) => {
        const dt = DateTime.fromISO(el.time, { zone: el.timeZone });
        const hour = dt.hour;

        if (hour < 12) {
            categories["Morning Time"].push(el);
        } else if (hour >= 12 && hour < 24) {
            categories["Evening Time"].push(el);
        }
    });

    return categories;
}





const TimeSlabList = ({ timeSlabList, minDate, onSelect }: TimeSlabListProps) => {

    const categorizedSlots = categorizeTimeSlots({ slabs: timeSlabList });



    return (
        <div className={`${bgColors.bgWhite} absolute leading-0 w-[375px]  shadow-[0px_3px_12px_0px_#0000001F] py-1 px-2 rounded-xl z-50 top-4`}>
            <div className='flex flex-col'>

                <div className=' py-3 px-3'>
                    <h4 className={` ${textColors.lightBlack} text-sm font-semibold`}>Select Pickup Time</h4>
                </div>
                <Divider color={bgColors.bgDivider} />
            </div>
            

            <div className='overflow-y-scroll py-3 px-2 h-[360px]'>

                {
                    Object.entries(categorizedSlots).map(([label, slots]) => (
                        <div key={label} className='mb-5'>
                            <h5 className={`text-sm font-semibold mb-2 px-1 ${textColors.lightBlack}`}>{label}</h5>
                            <div className="grid grid-cols-2 gap-2">
                                {slots.map((el: SelectedTime, i) => {
                                    const minDateTemp = DateTime.fromISO(minDate.time, { zone: minDate.timeZone });
                                    const slabDateTemp = DateTime.fromISO(el.time, { zone: el.timeZone });

                                    const isDisabled: boolean = minDateTemp.toMillis() > slabDateTemp.toMillis();
                                    return (
                                        <button
                                            key={i}
                                            // disabled={isDisabled}
                                            onClick={() => { onSelect(el) }}
                                            className={`py-3 px-6 rounded-sm font-semibold text-sm ${isDisabled ? `bg-gray-200 text-gray-400 cursor-default` : `${bgColors.bgFogWhite} ${textColors.darkBlack} cursor-pointer`} `}
                                        >
                                            {timeIn24HourFormat({ time: el.time, timeZone: el.timeZone })}
                                        </button>
                                    )
                                }

                                )}
                            </div>
                        </div>

                    ))
                }
            </div>







        </div>
    )
}

export default TimeSlabList