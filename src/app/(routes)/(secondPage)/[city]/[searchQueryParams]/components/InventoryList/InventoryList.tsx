"use client";
import InventryCarCard from '@/common/InventryCarCard'
import Container from '@/component/layout/Container'
import Section from '@/component/section'


const InventoryList = () => {
    return (
        <Section bgColor={""} >
            <Container>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {[1, 2, 3, 4, 5, 6, 7].map((el, i) => {
                        return <InventryCarCard key={i} />;
                    })}
                </div>
            </Container>
        </Section>
    )
}

export default InventoryList