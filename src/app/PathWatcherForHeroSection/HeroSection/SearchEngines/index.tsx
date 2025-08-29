"use client";
import { usePathname } from 'next/navigation';
import React from 'react'
import DailyRentalEngine from '@/app/PathWatcherForHeroSection/HeroSection/SearchEngines/DailyRentalEngine';
import MonthlyRentalEngine from '@/app/PathWatcherForHeroSection/HeroSection/SearchEngines/MonthlyRentalEngine';


const SearchEngines = () => {

    const pathName: string = usePathname();




    


    

    return (
        <div>
            {
                (pathName == "/" || pathName == "/daily-weekly-rental") && <DailyRentalEngine />
            }
            {
                (pathName == "/monthly-car-rental") && <MonthlyRentalEngine />
            }
        </div>
    )
}

export default SearchEngines