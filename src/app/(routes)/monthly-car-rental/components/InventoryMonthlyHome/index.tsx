
"use client";
import React from 'react'
import CarRentalLocationList from '../CarRentalLocationList'
import { useGetInvertory } from '@/app/HomePage/hooks/useGetInventory';


const InventoryMonthlyHome = () => {

    const { inventryList, isLoading, error } = useGetInvertory();

    if (error) {
        return <p>error</p>
    }

    if (isLoading) {
        return <>
            <p>Loading...</p>
        </>
    }

    return (
        <>
            <CarRentalLocationList inventryList={inventryList} />
        </>
    )
}

export default InventoryMonthlyHome