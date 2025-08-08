import Section from '@/component/section'
import { bgColors } from '@/constant/colors'
import React from 'react'
import BookingDetailsTemplate from './template'

const BookingDetailsPage = () => {
    return (
        <Section bgColor={bgColors.bgGray}>
            <BookingDetailsTemplate />
        </Section>
    )
}

export default BookingDetailsPage