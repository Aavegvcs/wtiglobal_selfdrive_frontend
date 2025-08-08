import React, { useRef, useState } from 'react'
import FieldWrapper from '../ui/FieldWrapper'
import FieldLabel from '../ui/FieldLabel'
import FieldValue from '../ui/FieldValue'
import MyDateRangePicker from '@/app/PathWatcherForHeroSection/HeroSection/components/fieldsBox/MyDateRangePicker'
import { useClickAway } from 'react-use'
import { addDays, differenceInCalendarDays } from 'date-fns'
import { RangeKeyDict, Range } from 'react-date-range'

type DateFieldProps = {
    label: string,
    value: string,
    placeholder: string
    selectedDateRange: Range,
    onRangeChange: (val: Range) => void,
    dateType: "START_DATE" | "END_DATE",
    minDate: Date
}

const DateField = ({ selectedDateRange, onRangeChange, label, value, placeholder, dateType, minDate }: DateFieldProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);





    const ref = useRef<HTMLDivElement>(null);

    const closeHandler = () => setIsOpen(false);

    // CLICK OUT SIDE
    useClickAway(ref, closeHandler);


    const onRangeSelectedHandler = (ranges: RangeKeyDict) => {
        const { startDate, endDate } = ranges.selection;

        setCount((prev) => prev + 1);
        if (dateType === "START_DATE") {
            if (startDate && endDate && differenceInCalendarDays(endDate, startDate) <= 1) {

                console.log(differenceInCalendarDays(endDate, startDate), "69")
                const newEndDate = addDays(startDate, 1);
                ranges.selection.endDate = newEndDate;
                onRangeChange(ranges.selection);

            } else {
                onRangeChange(ranges.selection);
            }


        } else if (dateType === "END_DATE") {

            if (selectedDateRange.startDate && endDate && differenceInCalendarDays(endDate, selectedDateRange.startDate) <= 1) {
                const newEndDate = addDays(selectedDateRange.startDate, 1);
                selectedDateRange.endDate = newEndDate;
            } else {
                selectedDateRange.endDate = endDate;
            }
            onRangeChange(selectedDateRange);
            closeHandler();
        }




        if (count == 1) {
            setCount(0);
            closeHandler()
        }
    }




    console.log(isOpen ,"isOpen")

    return (
        <div className='relative w-full'>
            <div ref={ref} onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
            }}   >
                <FieldWrapper>
                    <FieldLabel label={label} isIcon={false} />
                    <FieldValue valueText={value} placeholder={placeholder} />
                </FieldWrapper>
                {
                    isOpen && <MyDateRangePicker className='' selectedDate={selectedDateRange} onChange={onRangeSelectedHandler} minDate={minDate} />
                }
                {/* {
                    isOpen && <div>asdfgh</div>
                } */}
            </div>
        </div>
    )
}

export default DateField