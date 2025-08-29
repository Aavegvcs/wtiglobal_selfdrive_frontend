import { gradientColor, textColors } from '@/constant/colors'
import React from 'react'

type FareDetailPanelBtnProps = {
    text: string,
    onClick: () => void,
    isDisabled: boolean,
    type: "button" | "submit" | "reset"
}

const FareDetailPanelBtn = ({ type = "button", text, onClick =()=>{}, isDisabled }: FareDetailPanelBtnProps) => {
    return (
        <button
            type={type}
            disabled={isDisabled}
            className={`${gradientColor.primaryGradientColor} ${textColors.textWhite} active:scale-[0.99] cursor-pointer w-full py-3 rounded-lg mb-3`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default FareDetailPanelBtn