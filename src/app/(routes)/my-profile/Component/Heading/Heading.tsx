import { textColors } from '@/constant/colors';
import React from 'react'

interface HeadingProps {
    title: string
}

const Heading = ({ title }: HeadingProps) => {
    return (
        <div>
            <h2 className={`${textColors.lightBlack} font-semibold text-xl`}>{title}</h2>
        </div>
    )
}

export default Heading;