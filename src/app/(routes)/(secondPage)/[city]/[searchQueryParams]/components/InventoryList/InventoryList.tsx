"use client";
import { InventoryCarListProps } from '@/app/HomePage/components/InventoryHome/InventoryCarList';
import InventryCarCard from '@/common/InventryCarCard'
import Container from '@/component/layout/Container'
import Section from '@/component/section'


const InventoryList = ({ inventryList , bookNowHandler }: InventoryCarListProps) => {
    return (
        <Section bgColor={""} >
            <Container>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {Array.isArray(inventryList) && inventryList.map((el, i) => {
                        return <InventryCarCard bookNowHandler={bookNowHandler} key={i} inventryCard={el} />;
                    })}
                </div>
            </Container>
        </Section>
    )
}

export default InventoryList