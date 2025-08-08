import Divider from '@/component/ui/Divider/Divider'
import { bgColors, gradientColor, textColors } from '@/constant/colors'
import Image from 'next/image'
import React from 'react'

type AddressCardProps = {
    img: string,
    countryName: string,
    addressText: string,
}

const AddressCard = ({ img, countryName, addressText }: AddressCardProps) => {
    return (
        <div className={`grid grid-cols-[1fr_2fr] gap-3 ${bgColors.bgWhite} shadow-[0px_3px_20px_0px_#0000001F] p-8 rounded-2xl`}>
            {/* =============== COUNTRY FLAG =========== */}
            <div>
                <Image src={img} alt='' />
            </div>
            <div className='flex flex-col w-full'>
                <h4 className={`${textColors.textBlack} text-xl font-bold`}>{countryName}</h4>
                <Divider color={gradientColor.primaryGradientColor} />
                <span className={`${textColors.lightGrey} text-[16px] font-semibold inline-block my-2`}>
                    {addressText}
                </span>
                <div className={`${textColors.lightPurple} flex gap-2 text-xm font-bold`}>
                    <span>011-45434500</span>
                    <span>9250057902</span>
                </div>
            </div>
        </div>
    )
}

export default AddressCard