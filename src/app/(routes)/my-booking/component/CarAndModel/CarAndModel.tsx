import { bgColors, textColors } from '@/constant/colors'
import React from 'react'

interface CarAndModelProps {
    imgUrl: string,
    model: string
}

const CarAndModel = ({ imgUrl, model }: CarAndModelProps) => {
    return (
        <div className='flex flex-col items-center py-3 pe-3'>
            <img src={imgUrl} alt="" className='mb-1' />
            <span className={`py-1 text-center px-4 rounded-xl ${bgColors.bgLightGray} text-sm font-normal ${textColors.darkGray}`}>{model}</span>
        </div>
    )
}

export default CarAndModel