import { bgColors, textColors } from '@/constant/colors';
import { tripTripMap } from '@/constant/constant.maps';
import React from 'react'

type TripTypeDropDownProps = {
    onClick: (num: number) => void
}

const TripTypeDropDown = ({ onClick }: TripTypeDropDownProps) => {
    return (
        <>
            <div className={`flex flex-col absolute top-[16px] w-full overflow-y-scroll h-[120px] ${bgColors.bgWhite} rounded-sm  shadow-[0px_1px_6px_0px_#00000033]`}>
                {
                    Object.entries(tripTripMap).map((tripTpe, i) => {
                        return <div key={i}>
                            <button
                                className={`w-full text-left py-1.5 px-3 text-sm hover:bg-gray-200 ${textColors.lightGrey}`}
                                onClick={() => onClick(tripTpe[1].code)}>{tripTpe[1].textValue}
                            </button>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default TripTypeDropDown;