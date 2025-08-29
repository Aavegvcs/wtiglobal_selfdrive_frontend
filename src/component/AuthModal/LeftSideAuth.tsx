import React from 'react'
import "./index.css"

const LeftSideAuth = () => {
    return (
        <div className='rounded-3xl h-full leftsideAuthBGimg relative'>
            <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  px-16 py-10 border border-[#D6D6D6] text-white rounded-xl flex flex-col gap-3">
                <p>
                    Signup to join the
                    <br />
                    club of
                </p>
                <p className="text-xl font-semibold">
                    <span className='whitespace-nowrap'>1 Lakh+  Happy</span> <br />Customer
                </p>
            </div>
        </div>
    )
}

export default LeftSideAuth