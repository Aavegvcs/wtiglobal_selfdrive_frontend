import React from 'react'
// import { DateRangePicker, RangeKeyDict } from '@types/react-date-range'
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker, Range, RangeKeyDict } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file\
import "./index.css";



type MyDateRangePickerProps = {
    selectedDate: Range,
    onChange: (rangeVal: RangeKeyDict) => void,
    className: string,
    minDate: Date
}

const MyDateRangePicker = ({ selectedDate, onChange, className = "", minDate }: MyDateRangePickerProps) => {

    console.log(selectedDate && "not rendering", "23")
    console.log("verify rendring")

    return (
        <>{
            selectedDate && <div className={`absolute z-50 ${className}`} onClick={(e) => e.stopPropagation()}>
                <DateRangePicker
                    staticRanges={[]}
                    inputRanges={[]}
                    minDate={minDate}
                    months={2}
                    direction="horizontal"
                    ranges={[selectedDate]}
                    onChange={onChange}
                    rangeColors={["#0f5ec4"]}
                />
            </div>
        }
        </>
    )
}

export default MyDateRangePicker