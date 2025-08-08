import React, {  useRef, useState } from 'react'
import { useClickAway } from 'react-use';
import FieldWrapper from '@/app/PathWatcherForHeroSection/HeroSection/components/fieldsBox/FieldWrapper';
import FieldLabel from '@/app/PathWatcherForHeroSection/HeroSection/components/fieldsBox/FieldLabel';
import FieldValue from '@/app/PathWatcherForHeroSection/HeroSection/components/fieldsBox/FieldValue';
import MyDateRangePicker from '@/app/PathWatcherForHeroSection/HeroSection/components/fieldsBox/MyDateRangePicker';
import { Range, RangeKeyDict } from 'react-date-range';
import { addDays, differenceInCalendarDays } from 'date-fns';



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

    // const onRangeSelectedHandler = (ranges: RangeKeyDict) => {
    //     const { startDate, endDate } = ranges.selection;

    //     if (startDate && endDate && differenceInCalendarDays(startDate, endDate) <= 1) {
    //         const newEndDate = addDays(startDate, 1);
    //         selectedDateRange.endDate = newEndDate;
    //         onRangeChange(selectedDateRange);
    //         console.log("minDate range")
    //     } else {
    //     }

    //     setCount((prev) => prev + 1);
    //     if (isOpen === true && count === 1) {
    //         setCount(0)
    //         closeHandler()
    //     }
    //     onRangeChange(ranges?.selection)
    //     if (dateType === "END_DATE") {
    //         selectedDateRange.endDate = ranges.selection.endDate;
    //         onRangeChange(selectedDateRange);
    //         closeHandler()
    //         setCount(0)
    //     }
    // }

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






    return (
        <div className='relative'>
            <div ref={ref} onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
            }}   >
                <FieldWrapper>
                    <FieldLabel label={label} isIcon={false} />
                    <FieldValue valueText={value} placeholder={placeholder} />
                </FieldWrapper>
                {
                    isOpen &&
                    <MyDateRangePicker className='' selectedDate={selectedDateRange} onChange={onRangeSelectedHandler} minDate={minDate} />
                }
            </div>
        </div>
    )
}

export default DateField