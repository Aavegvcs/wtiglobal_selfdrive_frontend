import { bgColors, textColors } from '@/constant/colors'
import React from 'react'
import { IoSearch } from 'react-icons/io5'

const FilterSearchBar = () => {
    return (
        <div className={`flex items-center gap-2.5  ${bgColors.bgLightGray} py-1 px-2 rounded-xl`}>
            <input placeholder='Search Cars...' className={`outline-none border-none text-sm  py-1 px-2 bg-transparent`} />
            <IoSearch className={`${textColors.lightGrey}`}/>
        </div>
    )
}

export default FilterSearchBar