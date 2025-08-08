import React from 'react'
import SearchBar from '@/app/(routes)/(secondPage)/[city]/[searchQueryParams]/components/SearchBar'
import FilterInventoryDesktop from './components/FilterInventoryDesktop'
import Section from '@/component/section'
import { bgColors } from '@/constant/colors'
import InventoryList from './components/InventoryList/InventoryList'

const SelfDriveInventory = () => {
  return (
    <>
      <Section bgColor={bgColors.bgGrey} paddY='pt-0 pb-6'>
        <SearchBar />
        <FilterInventoryDesktop />
        <InventoryList />
      </Section>
    </>
  )
}

export default SelfDriveInventory