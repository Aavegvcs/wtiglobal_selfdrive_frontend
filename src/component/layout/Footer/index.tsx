import Container from '@/component/layout/Container';
import FooterCopyright from '@/component/layout/Footer/FooterCopyright';
import FooterBrand from '@/component/layout/Footer/FooterBrand';
import FooterSocialLinks from '@/component/layout/Footer/FooterSocialLinks';
import Divider from '@/component/ui/Divider/Divider';
import { bgColors } from '@/constant/colors';
import { footerColumnData } from '@/data/data';
import FooterColumn from '@/component/layout/Footer/FooterColumn';
import FooterGetInTouch from '@/component/layout/Footer/FooterGetInTouch';
import "./index.css";



const Footer: React.FC = () => {
    return (
        <footer id='footer' className='pt-14'>
            <Container>
                <div className='flex flex-col w-full'>
                    <div className='grid grid-cols-[240px_1fr_280px] gap-8'>
                        <div className='flex flex-col gap-4 pb-14'>
                            <FooterBrand />
                            <FooterSocialLinks />
                        </div>
                        <div className='grid grid-cols-3 gap-2'>
                            {
                                footerColumnData.map((el, i) => { return <FooterColumn key={i} title={el.title} links={el.links} /> })
                            }
                        </div>
                        <FooterGetInTouch title='Get In Touch' mobileNums=" 011-45434500, +91 9250057902" email='info@wticabs.com' address='3rd Floor, D21, Corporate Park, Sector-21, Dwarka, New Delhi - 110077' />
                    </div>
                    <Divider color={bgColors.bgFogWhite} />
                    <FooterCopyright />
                </div>
            </Container>
        </footer>
    )
}

export default Footer