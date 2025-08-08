import { bgColors } from '@/constant/colors'
import React from 'react'

type BookingDetailTileWrapperProps = {
    tileBgColor?: string,
    padding?: string,
    borderRadius?: string
    children: React.ReactNode
}


const BookingDetailTileWrapper = ({ tileBgColor = bgColors.bgFadeWhite, padding = "p-3", borderRadius = "rounded-xl", children }: BookingDetailTileWrapperProps) => {
    return (
        <div className={`${tileBgColor} ${padding} ${borderRadius}`}>{children}</div>
    )
}

export default BookingDetailTileWrapper