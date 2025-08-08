import { textColors } from '@/constant/colors'
import React from 'react'

type HeadingProps = {
    heading1: string,
    heading2: string
}

const Heading = ({ heading1, heading2 }: HeadingProps) => {
    return (
        <div className='flex flex-col items-center gap-2 mb-10'>
            <h1 className={`${textColors.textWhite} font-bold text-4xl tracking-wide`}>{heading1}</h1>
            <h2 className={`${textColors.textWhite} font-medium text-4xl tracking-wider`}>{heading2}</h2>
        </div>
    )
}

export default Heading