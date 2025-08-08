import Container from '@/component/layout/Container'
import DividerVertical from '@/component/ui/DividerVertical/DividerVertical'
import { bgColors, textColors } from '@/constant/colors'
import React from 'react'
import { RiFilter2Line } from 'react-icons/ri'
import { TbArrowsSort } from 'react-icons/tb'
import FilterTabButton from './FilterTabButton'
import FilterSearchBar from './FilterSearchBar'

const FilterInventoryDesktop = () => {
    return (
        <>
            <Container>
                <div className={`flex justify-between items-center py-3 px-3 ${bgColors.bgWhite} rounded-md mt-6`}>
                    <div className='flex justify-start gap-3 items-center'>
                        <div className={`flex gap-1 items-center ${textColors.lightBlack} me-2`}>
                            <span className={`font-semibold text-base`}>Filter</span>
                            <RiFilter2Line className='text-xl' />
                        </div>
                        <FilterTabButton />
                    </div>


                    <div className='flex gap-1.5'>
                        <FilterSearchBar />
                        <DividerVertical color={bgColors.bgExtraDarkGrey} />
                        <div className={`flex gap-1 items-center ${textColors.lightBlack}`}>
                            <span className={`font-semibold text-base`}>Sorted</span>
                            <TbArrowsSort className='text-xl' />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default FilterInventoryDesktop