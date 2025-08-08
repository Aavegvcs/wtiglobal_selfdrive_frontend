import { gradientColor, textColors } from '@/constant/colors'
import React from 'react'

type ModifyQueryBtnProps = {
    onClick: () => void,

}

const ModifyQueryBtn = ({ onClick }: ModifyQueryBtnProps) => {
    return (
        <button
            onClick={onClick}
            className={`${gradientColor.primaryGradientColor} py-3 px-4 text-xl rounded-xl ${textColors.textWhite} font-medium`}>Modify</button>
    )
}

export default ModifyQueryBtn