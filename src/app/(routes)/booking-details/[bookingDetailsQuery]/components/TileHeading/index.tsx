import { textColors } from '@/constant/colors'
import React from 'react'

type TileHeadingProps = {
    title: string,
    titleColor?: string,
    titleSize?: string
}

const TileHeading = ({ title, titleColor = textColors.darkBlack, titleSize = "text-xl" }: TileHeadingProps) => {
    return (
        <div className='mb-3'>
            <h4 className={`${titleColor} ${titleSize} mt-0 font-semibold`}>{title}</h4>
        </div>
    )
}

export default TileHeading