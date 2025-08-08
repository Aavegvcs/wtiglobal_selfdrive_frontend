"use client"
import InventryCarCard from '@/common/InventryCarCard';
import React from 'react'

const CarRentalLocationList = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => {
                return <InventryCarCard key={i} />;
            })}
        </div>
    )
}

export default CarRentalLocationList