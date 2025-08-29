"use client";
import Container from '@/component/layout/Container'
import Section from '@/component/section'
import { bgColors } from '@/constant/colors'
import React from 'react'
import BookingDetailLeftSide from './BookingDetailLeftSide'
import BookingDetailRightSide from './BookingDetailRightSide'
import BookingHeading from '../components/BookingHeading'
import useGetSingleInventory from '../hooks/useGetSingleInventory'
import { useBookingDetailsStore } from '@/state/useBookingDetailsStore';
import { TariffForSingleInventoryI } from '@/types/helper.interface';
import { FormProvider, useForm } from 'react-hook-form';
import { bookingSchema } from '@/validators/bookingUserFormValidation';
import { yupResolver } from '@hookform/resolvers/yup';

const BookingDetailsTemplate = () => {

    useGetSingleInventory()


    const selectedTariff: TariffForSingleInventoryI | null = useBookingDetailsStore((store) => store.selectedTariff);
    const bookingStep: number = useBookingDetailsStore((store) => store.bookingStep);

    const nextStepAction = useBookingDetailsStore((store) => store.nextStepAction);
    const prevStepAction = useBookingDetailsStore((store) => store.prevStepAction);




    const form = useForm({
        resolver: yupResolver(bookingSchema),
        mode: "onChange",
        defaultValues: {
            fullName: '',
            userContact: '',
            userEmail: '',
            isAbove25: false,
            hasDrivingExperience: false,
        },
    });

    const { handleSubmit } = form;

    const onSubmit = (data) => {
        console.log("Submitted data:", data);
        // You can now send `data` to your API, move to next step, etc.
        // nextStepAction(); // or any logic you need
    };





    return (
        <Section bgColor={bgColors.bgGray}>
            <Container>
                <div className='flex flex-col w-full'>
                    <BookingHeading bookingStep={bookingStep} prevStepAction={prevStepAction} />
                    <FormProvider {...form} >

                        <div className='grid grid-cols-[2.7fr_1.3fr] w-full items-start gap-4 relative'>
                            <BookingDetailLeftSide bookingStep={bookingStep} />
                            <BookingDetailRightSide
                                bookingStep={bookingStep}
                                selectedTariff={selectedTariff}
                                nextStepAction={nextStepAction}
                            />
                        </div>

                    </FormProvider>
                </div>
            </Container>
        </Section>
    )
}

export default BookingDetailsTemplate