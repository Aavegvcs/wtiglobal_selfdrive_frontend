import { bgColors } from '@/constant/colors';
import React from 'react'
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

type MyDateSinglePickerProps = {
    minDate: Date
    selected: Date,
    onClick: (dateVal: Date | undefined) => void,
    className: string
}


const MyDateSinglePicker = ({ minDate, selected, onClick, className = "" }: MyDateSinglePickerProps) => {
    return (
        <div className={`absolute z-50 ${className} ${bgColors.bgWhite} p-3 rounded-sm`}>
            <DayPicker
                disabled={{ before: minDate }}
                mode="single" selected={selected} onSelect={onClick}
                required={false}
            />
        </div>
    )
}

export default MyDateSinglePicker