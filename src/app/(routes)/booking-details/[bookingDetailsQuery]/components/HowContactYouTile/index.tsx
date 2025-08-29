"use client"
import React from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import { bgColors, textColors } from '@/constant/colors'
import TileHeading from '../TileHeading'
import InputField from '@/component/ui/InputField/InputField'
import { RiUserFollowFill } from 'react-icons/ri'
import { IoMdCall } from 'react-icons/io'
import { MdOutlineMail } from 'react-icons/md'

import { userContactAndConsentStore } from '@/state/useContactAndConsentStore'



const HowContactYouTile = () => {
    const userContact = userContactAndConsentStore((store) => store.userContact)
    const error = userContactAndConsentStore((store) => store.error)
    const addFieldOnChangeAction = userContactAndConsentStore((store) => store.addFieldOnChangeAction)

    const { fullName, contact, email } = userContact

    const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {


        const { value, name } = e.target

        addFieldOnChangeAction(name, value)
    }


    console.log(error, "error")



    return (
        <>
            <div className='mb-6'>
                <BookingDetailTileWrapper tileBgColor={bgColors.bgWhite} padding='p-0'>
                    <div className='flex flex-col'>
                        <TileHeading title={`How can we contact you?`} />
                        <div className='grid grid-cols-2 items-baseline gap-4'>
                            <div className={`${bgColors.bgTransparent} rounded-xl px-0`}>

                                {/* <Controller
                                    name="fullName"
                                    control={control}
                                    render={({ field }) => (
                                        <InputField
                                            type="text"
                                            value={field.value}
                                            placeholder="Full Name"
                                            bgColor={bgColors.bgLightGray}
                                            textSize='text-[16px]'
                                            onChange={(value: string) => field.onChange(value)}
                                            error={errors?.fullName?.message?.toString() || ""}
                                            padding='py-3 px-3'
                                        />
                                    )}
                                /> */}

                                <InputField
                                    icon={<RiUserFollowFill className={`${textColors.lightGray}`} />}
                                    bgColor={bgColors.bgLightGray}
                                    border=''
                                    padding='py-3 px-3'
                                    textSize='text-[16px]'
                                    placeholder='Your Full Name'
                                    name='fullName'
                                    type='text'
                                    value={fullName}
                                    onChange={onChangeField}
                                    error={error.fullName}
                                />
                            </div>
                            <div>
                                <div className={`flex flex-col gap-2 ${bgColors.bgTransparent} rounded-xl px-0`}>

                                    {/* <Controller
                                        name="userEmail"
                                        control={control}
                                        render={({ field }) => (
                                            <InputField
                                                type='email'
                                                icon={<MdOutlineMail className={`${textColors.lightGray}`} />}
                                                value={field.value}
                                                placeholder="Enter email"
                                                bgColor={bgColors.bgLightGray}
                                                textSize='text-[16px]'
                                                onChange={(value: string) => field.onChange(value)}
                                                error={errors?.userEmail?.message?.toString() || ""}
                                                padding='py-3 px-3'
                                            />
                                        )}
                                    /> */}
                                    <InputField
                                        icon={<MdOutlineMail className={`${textColors.lightGray}`} />}

                                        bgColor={bgColors.bgLightGray}
                                        border=''
                                        padding='py-3 px-3'
                                        textSize='text-[16px]'
                                        name='email' type='email'
                                        placeholder='Your Email'
                                        value={email}
                                        onChange={onChangeField}
                                        error={error.email}
                                    />

                                </div>
                                {/* <div className='flex items-start'>
                                    <Checkbox onChange={contactWithNumberOnlyHandler}>I don’t use whatsapp or Telegram. Please contact me by phone</Checkbox>
                                </div> */}
                            </div>
                            <div className={`${bgColors.bgTransparent} rounded-xl px-0`}>

                                {/* <Controller
                                    name="userContact"
                                    control={control}
                                    render={({ field }) => (
                                        <InputField
                                            type='text'
                                            icon={<FaPhoneAlt className={`${textColors.lightGray}`} />}
                                            value={field.value}
                                            placeholder="Enter Contact"
                                            bgColor={bgColors.bgLightGray}
                                            textSize='text-[16px]'
                                            onChange={(value: string) => field.onChange(value)}
                                            error={errors?.userContact?.message?.toString() || ""}
                                            padding='py-3 px-3'
                                        />
                                    )}
                                /> */}

                                <InputField
                                    icon={<IoMdCall className={`${textColors.lightGray}`} />}
                                    bgColor={bgColors.bgLightGray}
                                    border=''
                                    padding='py-3 px-3'
                                    textSize='text-[16px]'
                                    name='contact'
                                     type='contact'
                                    placeholder='Your Contact'
                                    value={contact}
                                    onChange={onChangeField}
                                    error={error.contact}
                                />
                            </div>
                        </div>
                    </div>
                </BookingDetailTileWrapper>
            </div>
        </>
    )
}

export default HowContactYouTile