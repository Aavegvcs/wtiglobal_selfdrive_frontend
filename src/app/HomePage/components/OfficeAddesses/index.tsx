import Container from '@/component/layout/Container'
import Section from '@/component/section'
import SectionHeading from '@/component/SectionHeading'
import { bgColors, textColors } from '@/constant/colors'
import AddressCard from '@/app/HomePage/components/OfficeAddesses/AddressCard'
import AddressIndiaFlag from "@/assets/images/address_india_img.svg"

const OfficeAddesses = () => {

    return (
        <Section bgColor={bgColors.bgFogWhite}>
            <Container>
                <div className='flex flex-col gap-10'>
                    <SectionHeading heading="Our Office Address"
                        fontSize="text-4xl"
                        textColor={textColors.textDarkBlue} />

                    <div className='grid grid-cols-2 gap-6'>
                        <AddressCard img={AddressIndiaFlag} countryName='India' addressText='3rd Floor, D21, Corporate Park, Sector-21, Dwarka, New Delhi - 110077' />
                        <AddressCard img={AddressIndiaFlag} countryName='Dubai' addressText='Smark 9, Zabeel Business Center Building, 302-3, AL Karama, Dubai, UAE' />
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default OfficeAddesses