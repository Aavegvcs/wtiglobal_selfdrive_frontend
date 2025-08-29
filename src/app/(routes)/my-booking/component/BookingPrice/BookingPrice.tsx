import React from 'react'

interface BookingPriceProps {
    amount: number,
    currencyName: string
}

const BookingPrice = ({ amount, currencyName }: BookingPriceProps) => {
    return (
        <div className='flex justify-end items-end'>
            <div>
                <div className="text-[32px] text-[#131313] font-black">
                    <span className="text-[24px] font-semibold">
                        {currencyName}
                    </span>{" "}
                    {amount}
                </div>
                <div className="text-[14px] text-[#979797] font-medium">
                    Total Paid Amount
                </div>
            </div>
        </div >
    )
}

export default BookingPrice