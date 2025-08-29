import React from 'react'
import LocationAndTimeBookingDesktop from '../../LocationAndTimeBookingDesktop/LocationAndTimeBookingDesktop'
import BookingPrice from '../../BookingPrice/BookingPrice'

const CarBottomSectionDesktop = ({ pickup, drop ,bookingPrice }) => {
    return (
        <div className={`grid grid-cols-3`}>

            <LocationAndTimeBookingDesktop isLeftBorder={false} type={"Pick Up"} address={pickup?.address} date={pickup?.date} time={pickup?.time} />
            <LocationAndTimeBookingDesktop isLeftBorder={true} type={"Drop"} address={drop?.address} date={drop?.date} time={drop?.time} />

            <BookingPrice amount = {bookingPrice.amount} currencyName = {bookingPrice.currency} />
        </div>
    )
}

export default CarBottomSectionDesktop