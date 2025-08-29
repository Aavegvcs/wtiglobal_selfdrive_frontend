import React from 'react'
import { activeBookingT } from '../../page'
import { bgColors, textColors } from '@/constant/colors'
import { FaCar } from 'react-icons/fa'


interface BookingTabsProps {
    tabList: activeBookingT[],
    activeBookingTab: activeBookingT,
    onClick: (val: activeBookingT) => void
}

const BookingTabs = ({ tabList, activeBookingTab, onClick }: BookingTabsProps) => {
    return (
        <div className="flex justify-center items-center w-full -translate-y-[50%]">
            <div className={`${bgColors.bgWhite}  flex gap-4 mx-auto p-4 rounded-xl`}>
                {
                    tabList.map((el, i) => {
                        const isActive = el.value === activeBookingTab.value;
                        return <BarOptiobBtn isActive={isActive} onClick={onClick} el={el} key={i} />
                    })
                }
            </div>
        </div>
    )
}

export default BookingTabs





interface BarOptiobBtnProps {
    isActive: boolean,
    el: activeBookingT,
    onClick: (val: activeBookingT) => void
}

const BarOptiobBtn = ({ onClick, isActive, el }: BarOptiobBtnProps) => {
    return (
        <>
            <button
                className={`border-none cursor-pointer outline-none rounded-[12px] ${isActive ? "bg-[#FFEDDD]" : "bg-[#F5f5f5]"
                    }  text-center py-3 px-4 flex items-center justify-center gap-2`}
                onClick={() => {
                    onClick(el)
                }}
            >
                <span
                    className={
                        `${isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-[#EB840C] to-[#EF5600]" : "text-[#888888]"} font-semibol text-2xl  flex gap-2 items-center`
                    }
                >
                    <FaCar className={`${isActive ? `${textColors.textOrange}` : `${textColors.lightGray}`}`} />
                    {el.text}
                </span>
            </button>
        </>
    );
};