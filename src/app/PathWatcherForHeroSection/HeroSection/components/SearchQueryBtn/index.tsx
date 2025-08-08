import { gradientColor } from '@/constant/colors'
import React from 'react'

type SearchQueryBtnProps = {
    onClick: () => void
}

const SearchQueryBtn = ({ onClick }: SearchQueryBtnProps) => {
    return (
        <>
            <button
                className={`${gradientColor.primaryGradientColor} rounded-lg text-white text-2xl font-bold`}
                onClick={onClick}
            >
                Go
            </button>
        </>
    )
}

export default SearchQueryBtn