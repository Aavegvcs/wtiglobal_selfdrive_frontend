import React from 'react'

type FieldValueProps = {
    valueText: string,
    placeholder: string,

}

const FieldValue = ({ valueText, placeholder }: FieldValueProps) => {
    return (
        <>
            <input
                className={`text-[#464646]  border-none outline-none cursor-pointer text-base font-bold bg-transparent placeholder:text-[#686868] placeholder:font-normal placeholder:text-sm mb-[2px]`}
                value={valueText}
                placeholder={placeholder}
                readOnly
            />
        </>
    )
}

export default FieldValue