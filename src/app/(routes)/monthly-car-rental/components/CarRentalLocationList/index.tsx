"use client"
import { InventoryCarListProps } from '@/app/HomePage/components/InventoryHome/InventoryCarList';
import InventryCarCard from '@/common/InventryCarCard';
import React from 'react'


const CarRentalLocationList = ({ inventryList }: InventoryCarListProps) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {Array.isArray(inventryList) && inventryList.map((el, i) => {
                return <InventryCarCard key={i} inventryCard={el} />;
            })}
        </div>
    )
}

export default CarRentalLocationList