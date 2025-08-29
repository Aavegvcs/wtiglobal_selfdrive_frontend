import Section from '@/component/section';
import { bgColors } from '@/constant/colors';
import React from 'react'
import InventoryMonthlyHome from './components/InventoryMonthlyHome';
import Container from '@/component/layout/Container';

const MonthlyCarRentalPage = () => {
  return (
    <>
      <Section bgColor={bgColors.bgGray}>
        <Container>
          <InventoryMonthlyHome />
        </Container>
      </Section>
    </>
  )
}

export default MonthlyCarRentalPage;