import { bgColors, textColors } from '@/constant/colors'
import React from 'react'

type ContactInfoBlockProps = {
    icon: React.ReactNode,
    title: string,
    content: string
}

const ContactInfoBlock = ({ icon, title, content }: ContactInfoBlockProps) => {
    return (
        <>
            <div className="flex items-start space-x-3 py-3">
                <div className={`p-2 rounded text-4xl ${bgColors.bgExtraDarkGray}`}>{icon}</div>
                <div>
                    <div className={`font-semibold ${textColors.lightBlack} text-2xl`}>{title}</div>
                    <div className={` ${textColors.lightGray} text-sm tracking-wide`}>{content}</div>
                </div>
            </div>
        </>
    )
}

export default ContactInfoBlock