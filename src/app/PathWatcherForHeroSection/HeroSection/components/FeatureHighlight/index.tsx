import { gradientColor, textColors } from '@/constant/colors'
import { featureHighlightArr } from '@/data/data'
import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'

const FeatureHighlight = () => {
    return (
        <>
            <div className="flex justify-center items-center gap-3 w-full">
                {featureHighlightArr.map((item, index) => (
                    <div className="flex gap-2 items-center justify-center" key={index}>
                        <button
                            className={`${gradientColor.primaryGradientColor} size-7 flex justify-center items-center p-1 rounded-[50%]`}
                        >
                            <div className="rounded-[50%] border-[1px] border-white p-[4px]">
                                <FaThumbsUp className="text-[8px] text-white" />
                            </div>
                        </button>
                        <span
                            className={`text-base ${textColors.textWhite}`}
                        >
                            {item}
                        </span>

                        {featureHighlightArr.length - 1 != index && (
                            <span
                                className={`text-base ${textColors.textWhite}`}
                            >
                                |
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default FeatureHighlight