import { textColors } from '@/constant/colors'
import React from 'react'
import { IoCallSharp, IoLocationSharp } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'

type FooterGetInTouchProps = {
    title: string,
    mobileNums: string,
    email: string,
    address: string,
}

const FooterGetInTouch = ({ title, mobileNums, email, address }: FooterGetInTouchProps) => {
    return (
        <div>
            <h3 className={`${textColors.textWhite} text-xl font-semibold mb-5`}>{title}</h3>
            <div className='flex gap-2 items-baseline'>
                <div className='size-4 '> <IoCallSharp className={`${textColors.textWhite} text-[16px]`} /></div>
                <span className={`${textColors.textWhite} text-sm`}>{mobileNums}</span>
            </div>
            <div className='flex gap-2 items-baseline'>
                <div className='size-4 '>
                    <MdOutlineEmail className={`${textColors.textWhite} text-[16px]`} />
                </div>
                <span className={`${textColors.textWhite} text-sm`}>{email}</span>
            </div>
            <div className='flex gap-2 items-baseline'>
                <div className='size-4 '>
                    <IoLocationSharp className={`${textColors.textWhite} text-[16px]`} />
                </div>
                <span className={`${textColors.textWhite} text-sm`}>{address}</span>
            </div>
        </div>
    )
}

export default FooterGetInTouch