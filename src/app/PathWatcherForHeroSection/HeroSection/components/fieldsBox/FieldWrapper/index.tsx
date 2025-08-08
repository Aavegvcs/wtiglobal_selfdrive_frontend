import React from 'react'


type FieldWrapperProps = {
    children: React.ReactNode
}

const FieldWrapper = ({ children }: FieldWrapperProps) => {
    return (
        <div className={`flex flex-col gap-1 border  rounded-lg py-4 px-4 bg-transparent hover:bg-[#e9f1fe] cursor-pointer border-[#DCDCDC] relative`}>{children}</div>
    )
}

export default FieldWrapper