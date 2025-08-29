import Button from '@/component/ui/Button/Button'
import { bgColors, gradientColor, textColors } from '@/constant/colors'
import React from 'react'
import { RxAvatar } from 'react-icons/rx'
import { CiLogin } from 'react-icons/ci'

const SideBarProfile = () => {
    return (
        <div className={`${bgColors.bgWhite} px-4 py-4 rounded-[8px] shadow`}>
            <div className=''>
                <div className='flex flex-col items-center gap-1 w-full mb-5'>
                    <RxAvatar className={`text-[88px] ${textColors.lightGray}`} />
                    <h4 className={`text-[16px] ${textColors.lightBlack} font-semibold`}>Akku</h4>
                </div>
                <div
                    className={`flex justify-center items-center gap-1 mb-2 ${gradientColor.primaryGradientColor} rounded cursor-pointer`}
                >
                    <RxAvatar className={`${textColors.textWhite}`} />
                    <Button
                        padding='py-2'
                        title='Profile'
                        textSize='text-sm'
                    >
                    </Button>
                </div>
                <div
                    className={`flex justify-center items-center gap-1 mb-2 ${gradientColor.primaryGradientColor} rounded cursor-pointer`}
                >
                    <CiLogin className={`${textColors.textWhite}`} />
                    <Button
                        padding='py-2'
                        title='Log out'
                        textSize='text-sm'
                    >
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default SideBarProfile