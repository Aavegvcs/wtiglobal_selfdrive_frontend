import React from 'react'
import Button from '../ui/Button/Button'
import { bgColors, gradientColor, textColors } from '@/constant/colors'
import { TabsT } from '@/types/types'

interface TabsProps {
    tabsList: TabsT[],
    activeTab: TabsT,
    onClick: (val: TabsT) => void,
    alignment: "left" | "center" | "right"
}

const Tabs = ({ tabsList, activeTab, onClick, alignment = "left" }: TabsProps) => {
    const alignmentObj = {
        left: "justify-start",
        center: " justify-center",
        right: "justify-end",
    }
    return (
        <div className={`flex ${alignmentObj[alignment]}`}>
            {tabsList.map((el: TabsT, i) => {
                const isActive = activeTab?.key === el?.key;
                const textColor = isActive ? textColors.textWhite : textColors.lightBlack;
                const bgColor = isActive ? gradientColor.primaryGradientColor : bgColors.bgWhite;
                return (<Button
                    key={i}
                    padding='py-2 px-4'
                    bgColor={bgColor}
                    textColor={textColor}
                    title={el.label}
                    onClick={() => onClick(el)}
                    textSize='text-sm'
                />
                )
            })}


        </div>
    )
}

export default Tabs