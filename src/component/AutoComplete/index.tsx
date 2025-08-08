import { LocationFieldI } from '@/app/PathWatcherForHeroSection/HeroSection/types/types'
import { bgColors, textColors } from '@/constant/colors'
import React from 'react'

type AutoCompleteProps = {
    onClick: (val: LocationFieldI) => void
    locationList: LocationFieldI[]
}

const AutoComplete = ({ onClick, locationList }: AutoCompleteProps) => {
    return (
        <>
            <div className={`flex flex-col absolute top-[16px] w-full overflow-y-scroll h-[240px] ${bgColors.bgWhite} rounded-sm  shadow-[0px_1px_6px_0px_#00000033]`}>
                {
                    locationList.map((location, i) => {
                        return <div className='hover:bg-gray-200 w-full py-1 px-2' key={i} onClick={() => onClick(location)}>
                            <span className={`font-medium text-[16px] ${textColors.lightBlack}`}>{
                                location.city
                            }</span>
                        </div>
                    })
                }
            </div >
        </>
    )
}

export default AutoComplete