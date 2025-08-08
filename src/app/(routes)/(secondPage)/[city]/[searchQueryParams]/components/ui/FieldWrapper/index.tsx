import React from 'react'


type FieldWrapperProps = {
    children: React.ReactNode
}

const FieldWrapper = ({ children }: FieldWrapperProps) => {
    return (
        <div className={`flex flex-col gap-0 border  rounded-xl px-3 py-2 hover:bg-[#e9f1fe] cursor-pointer bg-[#F2F2F2] border-[#CFCFCF] relative`}>{children}</div>
    )
}

export default FieldWrapper