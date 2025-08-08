import Container from '@/component/layout/Container'
import Section from '@/component/section'
import { bgColors } from '@/constant/colors'
import React from 'react'
import BookingDetailLeftSide from './BookingDetailLeftSide'
import BookingDetailRightSide from './BookingDetailRightSide'
import BookingHeading from '../components/BookingHeading'

const BookingDetailsTemplate = () => {
    return (
        <Section bgColor={bgColors.bgGray}>
            <Container>
                <div className='flex flex-col w-full'>
                    <BookingHeading />
                    <div className='grid grid-cols-[2.7fr_1.3fr] items-start gap-4 relative'>
                        <BookingDetailLeftSide />
                        <BookingDetailRightSide />
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default BookingDetailsTemplate