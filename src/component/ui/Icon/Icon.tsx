import { textColors } from '@/constant/colors'
import React from 'react'

type IconProps = {
    iconProps: React.ReactNode,
    onClick: () => void
}

const Icon = ({ iconProps, onClick }: IconProps) => {
    return (
        <button onClick={onClick} className={`flex cursor-pointer text-xl  justify-center items-center p-2 rounded-md bg-[#7878FF] ${textColors.textWhite} size-8 absolute right-0`}>{iconProps}</button>
    )
}

export default Icon