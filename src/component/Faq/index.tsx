"use client";
import { bgColors, textColors } from '@/constant/colors'
import React, { useState } from 'react'
import Icon from '@/component/ui/Icon/Icon';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Faq = () => {
    const [isOpenFaq, setIsOpenFaq] = useState<boolean>(false);

    const toggleFaqHandler = () => setIsOpenFaq((prev) => !prev);
    return (
        <div className={`${bgColors.bgWhite} p-6 rounded-lg`}>
            {/* FAQ QUESTION */}
            <div className='flex relative'>
                <h4 className={`${textColors.textBlue} font-medium text-[16px]`}>Do I need to register on your site to book cab?</h4>
                <Icon iconProps={isOpenFaq ? <FaMinus /> : <FaPlus />} onClick={toggleFaqHandler} />
            </div>
            {/* FAQ ANSWER */}
            {
                isOpenFaq &&
                <div className='mt-2'>
                    <p className={`${textColors.lightGrey} font-medium text-sm `}>
                        No. You can use our service fully without the need to register by using  as a guest option. You just need to provide your details at the time of booking.
                    </p>
                </div>
            }
        </div>
    )
}

export default Faq