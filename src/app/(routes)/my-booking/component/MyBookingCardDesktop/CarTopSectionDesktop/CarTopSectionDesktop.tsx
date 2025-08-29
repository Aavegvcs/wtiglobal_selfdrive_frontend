import React from 'react'
import CarAndModel from '../../CarAndModel/CarAndModel'
import MyBookingSummaryDesktop from '../../MyBookingSummaryDesktop/MyBookingSummaryDesktop'

const CarTopSectionDesktop = ({ selectedCar, summaryList }) => {
    return (
        <div className={`grid grid-cols-[0.8fr_2.2fr] items-center gap-2`}>
            <CarAndModel imgUrl={selectedCar.img} model={selectedCar.model} />
            <MyBookingSummaryDesktop summaryList={summaryList} />
        </div>
    )
}

export default CarTopSectionDesktop