"use client";
import Heading from '../Component/Heading/Heading'
import { bgColors, gradientColor } from '@/constant/colors'

import { yupResolver } from '@hookform/resolvers/yup';
import React, { ChangeEvent } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { userRegisterFormValidationSchema } from '@/validators/contactformValidator';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { InferType } from 'yup';
import InputField from '@/component/ui/InputField/InputField';
import Button from '@/component/ui/Button/Button';

export type UpDateFormData = InferType<typeof userRegisterFormValidationSchema>;

const UpdateUserForm = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<UpDateFormData>({
        resolver: yupResolver(userRegisterFormValidationSchema),
        mode: 'onChange',
        defaultValues: {
            name: '',
            contact: "",
            gender: '',
            email: '',
        },
    });


    const onSubmit: SubmitHandler<UpDateFormData> = (data) => {
        console.log("Form submitted:", data);
    };

    return (
        <div className={`${bgColors.bgWhite} p-4 rounded-[8px] shadow`}>
            <div className='flex flex-col m-4'>
                <Heading title='Personal Information' />
            </div>

            <form className="flex  flex-col gap-3 w-full" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            type="text"
                            placeholder="Your name"
                            bgColor={bgColors.bgWhite}
                            value={field.value}
                            padding='px-2 py-3'
                            textSize='text-[14px]'
                            onChange={(value: ChangeEvent<HTMLInputElement>) => field.onChange(value)}
                            error={errors && errors?.name?.message}
                        />
                    )}
                />

                <Controller
                    name="contact"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            type="text"
                            value={field.value}
                            placeholder="Contact Number"
                            bgColor={bgColors.bgWhite}
                            padding='px-2 py-3'
                            textSize='text-[14px]'
                            onChange={(value: ChangeEvent<HTMLInputElement>) => field.onChange(value)}
                            error={errors && errors?.contact?.message}
                        />
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            type="text"
                            padding='px-2 py-3'
                            textSize='text-[14px]'
                            value={field.value}
                            placeholder="Email"
                            bgColor={bgColors.bgWhite}
                            onChange={(value: ChangeEvent<HTMLInputElement>) => field.onChange(value)}
                            error={errors && errors?.email?.message}
                        />
                    )} />

                <div className='flex flex-col'>

                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <FormControl>
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup
                                    row
                                    {...field}
                                    onChange={(e) => {
                                        field.onChange(e);
                                    }}
                                >
                                    <FormControlLabel value="MALE" control={<Radio size="small" />} label="Male" />
                                    <FormControlLabel value="FEMALE" control={<Radio size="small" />} label="Female" />
                                    <FormControlLabel value="UNKNOWN" control={<Radio size="small" />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                    {errors?.gender?.message && <span className='text-red-500 text-[12px]'>{errors?.gender?.message}</span>}
                </div>



                <Button
                    padding='px-2 py-2'
                    textSize='text-[14px]'
                    title="Update" bgColor={gradientColor.primaryGradientColor} />
            </form>
        </div>
    )
}

export default UpdateUserForm