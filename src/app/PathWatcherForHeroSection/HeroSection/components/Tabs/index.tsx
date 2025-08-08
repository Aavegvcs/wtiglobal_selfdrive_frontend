"use client"
import { bgColors, gradientColor, textColors } from '@/constant/colors';
import { tabsListData } from '@/constant/constant.maps';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';




const tabStyle: string = "flex gap-2 items-center py-2 px-4 rounded-sm text-[16px]";



const Tabs = () => {

  const pathName: string = usePathname();


  return (
    <div className='flex gap-2 '>
      {
        tabsListData.map((el, i) => {
          const isActive: boolean =
            (pathName === "/" && el.href === "/daily-weekly-rental") || el.href === pathName;

          return (
            <Link href={el.href} className={`${tabStyle} 
             ${isActive ?
                `${textColors.textWhite} ${gradientColor.primaryGradientColor}`
                : `${textColors.lightBlack} ${bgColors.bgFogWhite}`}`} key={i}>
              {
                isActive ?
                  <IoMdRadioButtonOn className='text-xl' /> : <IoMdRadioButtonOff />
              }
              {el.text}
            </Link>
          )
        })
      }
    </div>
  )
}

export default Tabs