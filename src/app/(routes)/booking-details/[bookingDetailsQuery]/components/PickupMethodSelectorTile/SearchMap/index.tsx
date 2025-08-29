"use client";
import { textColors } from '@/constant/colors';

import React from 'react'

const SearchMap = () => {

    const onSwitchHandler = () => { }
    return (
        <div>
            {/* SEARCHY MAP */}

            <div className='flex items-center gap-2'>

                {/* <Switch defaultChecked onChange={onSwitchHandler} /> */}
                <span className={`${textColors.lightBlack} font-normal text-sm`}>Return to the same location</span>
            </div>
        </div>
    )
}

export default SearchMap