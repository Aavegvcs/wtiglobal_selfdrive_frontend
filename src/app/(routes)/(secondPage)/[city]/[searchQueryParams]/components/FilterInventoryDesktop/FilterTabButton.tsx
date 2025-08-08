import { bgColors, textColors } from '@/constant/colors'
import { filterTabs } from '@/data/data'
import React from 'react'

const FilterTabButton = () => {
    return (
        <>
            {
                filterTabs.map((el, i) => {
                    return <button key={i} className={`px-2 py-1.5 rounded-xl font-medium text-sm ${textColors.textFadeGrayLight} ${bgColors.bgLightGray}`}>{el.text}</button>
                })
            }
        </>
    )
}

export default FilterTabButton 