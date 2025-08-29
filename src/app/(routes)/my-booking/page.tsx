"use client";
import Container from '@/component/layout/Container'
import Section from '@/component/section'
import { bgColors, textColors } from '@/constant/colors'
import React, { useState } from 'react'
import BookingTabs from './component/BookingTabs/BookingTabs'
import { myBookingBookingTabs } from '@/constant/constant.maps'
import MyBookingBannerImg from "@/assets/images/myBookingBannerImg.svg"
import Banner from '@/component/Banner/Banner';
import MyBookingContainer from './component/MyBookingContainer/MyBookingContainer';

export type activeBookingT = {
    text: string,
    value: string,
}

const tabList: activeBookingT[] = Object.values(myBookingBookingTabs);

const MyBooking = () => {
    const [activeBookingTab, setActiveBookingTab] = useState(myBookingBookingTabs.UPCAMING);

    const onChangeActiveBookingTab = (val) => setActiveBookingTab(val);


    return (
        <>
            <Section paddY='py-14' bgColor={bgColors.bgFadeWhite}>
                <div className='relative'>
                    <Banner img={MyBookingBannerImg} />
                    <h3 className={`${textColors.textWhite} font-semibold text-2xl absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}>My Trips</h3>
                </div>
                <div>
                    <BookingTabs
                        onClick={onChangeActiveBookingTab}
                        activeBookingTab={activeBookingTab}
                        tabList={tabList}
                    />
                </div>
                <Container>
                    <MyBookingContainer />
                </Container>
            </Section>
        </>
    )
}

export default MyBooking