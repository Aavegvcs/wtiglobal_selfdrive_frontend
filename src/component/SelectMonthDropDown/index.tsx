import { bgColors, textColors } from '@/constant/colors'
import React from 'react'


type SelectMonthDropDownProps = {
    onClick: (monthNumber: number) => void
}

const monthNumberList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const SelectMonthDropDown = ({ onClick }: SelectMonthDropDownProps) => {
    return (
        <div className={`flex flex-col absolute top-[16px] w-full overflow-y-scroll h-[240px] ${bgColors.bgWhite} rounded-sm  shadow-[0px_1px_6px_0px_#00000033]`}>
            {
                monthNumberList.map((monthNumber, i) => {
                    return <div className='hover:bg-gray-200 w-full py-1 px-2' key={i} onClick={() => onClick(monthNumber)}>
                        <span className={`font-medium text-[14px] ${textColors.lightBlack}`}>{monthNumber} Month</span>
                    </div>
                })
            }
        </div>
    )
}

export default SelectMonthDropDown