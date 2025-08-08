import React from 'react'
import DropdownBlueArrowImg from "@/assets/icons/dropdown_blue_arrow_img.svg";
import Image from 'next/image';
import { textColors } from '@/constant/colors';

type FieldLabelProps = {
    label: string,
    isIcon: boolean
}

const FieldLabel = ({ label, isIcon = false }: FieldLabelProps) => {
    return (
        <div className={`flex flex-col gap-1.5`}>
            <label className={`${textColors.lightGrey}font-medium text-sm`}>{label}</label>
            {isIcon && <Image src={DropdownBlueArrowImg} width={20} height={20} alt="" />}
        </div>
    )
}

export default FieldLabel