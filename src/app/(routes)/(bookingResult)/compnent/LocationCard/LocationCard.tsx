import React from 'react'

interface LocationCardProps {
    type: string,
    address: string,
    date: string,
    time: string
}

const LocationCard = ({ type, address, date, time }: LocationCardProps) => {
    return (
        <>

            <div className="flex flex-col gap-2 p-4 border-l border-gray-200">
                {/* Title */}
                <h3 className="font-semibold text-lg">{type}</h3>

                {/* Address */}
                <p className="text-gray-600 text-sm leading-5">{address}</p>

                {/* Date */}
                <p className="text-gray-800 text-sm">
                    <span className="font-medium"> Date :</span> {date}
                </p>

                {/* Time */}
                <p className="text-gray-800 text-sm">
                    <span className="font-medium"> Time :</span> {time}
                </p>
            </div>

        </>
    )
}

export default LocationCard