import Container from '@/component/layout/Container'
import Section from '@/component/section'
import SectionHeading from '@/component/SectionHeading'
import { bgColors, textColors } from '@/constant/colors'
import Faq from '@/component/Faq'

const FAQHome = () => {
    return (
        <Section bgColor={`${bgColors.bgGray}`}>
            <Container>
                <div className='flex flex-col gap-10 w-full'>
                    <SectionHeading heading='Frequently Asked Questions FAQ’s' fontSize='text-2xl' textColor={textColors.textDarkBlue} />
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-4'>
                            <Faq />
                            <Faq />
                            <Faq />
                            <Faq />
                            <Faq />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Faq />
                            <Faq />
                            <Faq />
                            <Faq />
                            <Faq />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default FAQHome