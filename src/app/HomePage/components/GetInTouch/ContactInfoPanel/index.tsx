import { bgColors, gradientColor, textColors } from '@/constant/colors'
import ContactInfoBlock from "@/app/HomePage/components/GetInTouch/ContactInfoBlock";
import { TbMailBitcoin } from "react-icons/tb";
import Divider from "@/component/ui/Divider/Divider";
import SocialMedia from "@/app/HomePage/components/GetInTouch/SocialMedia";
import { MdOutlineSupportAgent } from 'react-icons/md';


const ContactInfoPanel = () => {
    return (
        <>
            <div className="flex flex-col justify-between">
                <div>
                    <div className="flex gap-2 items-baseline mb-3">
                        <h2 className={`${textColors.textLightBlack} font-bold text-3xl`}>Get In Touch</h2>
                        <span className={`${gradientColor.primaryGradientColor} h-1.5 w-[44px] inline-block rounded-2xl`}></span>
                    </div>
                    <div className="flex flex-col pe-11">
                        <ContactInfoBlock icon={<TbMailBitcoin className={`${textColors.textWhite}`} />} title="Send your query" content="info@wticabs.com" />
                        <Divider color={bgColors.bgDivider} />
                        <ContactInfoBlock icon={<MdOutlineSupportAgent className={`${textColors.textWhite}`} />} title="Priority Support" content="011-45434500, 9250057902" />
                    </div>
                </div>
                <SocialMedia />
            </div>
        </>
    )
}

export default ContactInfoPanel