import { bgColors, textColors } from '@/constant/colors'
import { socialMediaInfoList } from '@/data/data'
import Link from 'next/link'
import React from 'react'

const FooterSocialLinks = () => {
    return (
        <>
            <div className='flex flex-col gap-6'>
                <h3 className={`${textColors.textWhite} font-semibold text-xl`}>Follow Us</h3>
                <div className='flex gap-2'>
                    {
                        socialMediaInfoList.map((el, i) => (
                            <Link href={"#"} key={i}><div className={`${bgColors.bgWhite} ${textColors.lightBlack} size-10 flex justify-center items-center rounded-[50%] `}>{el.icon}</div></Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default FooterSocialLinks