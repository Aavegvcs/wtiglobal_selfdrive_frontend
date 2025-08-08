import { textColors } from '@/constant/colors'
import React from 'react'


type FareTitleCardProps ={
    title: string
}

const FareTitleCard = ({ title }: FareTitleCardProps) => {
    return (
        <div className='mb-3'>
            <h4 className={`${textColors.lightBlack} text-lg font-semibold `}>{title}</h4>
        </div>
    )
}

export default FareTitleCard