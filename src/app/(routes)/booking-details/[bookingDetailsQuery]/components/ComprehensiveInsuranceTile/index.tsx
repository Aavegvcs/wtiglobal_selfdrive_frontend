"use client";
import React, { useState } from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import { bgColors, textColors } from '@/constant/colors'
import TileHeading from '../TileHeading'
import { IoShieldHalfOutline } from 'react-icons/io5'
import { Box, Modal } from '@mui/material';
import { style } from '../../style';



const comprehensiveDescription = `Insurance: Terms and Limitations
1. What the insurance does not cover:
- Damage to tires, rims, hubcaps, antennas, and windows.
- Damage caused while driving off-road, towing, racing, or violating UAE laws.
- Driving under the influence of alcohol or drugs voids the insurance.
- Personal belongings are not covered.
2. In case of an accident:
- A police report is mandatory:
- Green report (not at fault) — you pay nothing.
- Red report (at fault) — you cover the cost of the report (approximately 1000-5000 AED) and the excess fee.
- Without a police report, all expenses are borne by the renter.
3. Driver and liability:
- The minimum age of the driver is 21 years.
4. Basic coverage:
- Basic insurance (third-party liability) is included.
5. Excess in case of an accident where you are at fault:
- 1000-5000 AED  + a possible additional fee for the vehicle’s downtime.`;


const ComprehensiveInsuranceTile = () => {
    const [activeModalWithData, setActiveModalWithData] = useState<boolean>(false);

    const showModal = () => {
        setActiveModalWithData(true);
    };
    const hideModal = () => {
        setActiveModalWithData(false);
    };

    return (
        <>
            <div className='mb-6'>
                <BookingDetailTileWrapper tileBgColor={bgColors.bgWhite} padding='p-0'>
                    <div className='flex flex-col'>
                        <TileHeading title={`Comprehensive Insurance`} />
                        <div className='flex flex-col'>
                            <div className='flex items-start gap-1.5'>

                                <IoShieldHalfOutline className={`${textColors.lightBlack} text-lg`} />
                                <div className='flex flex-col'>
                                    <span className={`${textColors.lightBlack} text-sm font-medium`}>Excess amount of 1000-1500 AED.
                                        <button className={`${textColors.lightPurple} ms-2 cursor-pointer`} onClick={showModal}>
                                            More
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </BookingDetailTileWrapper>
            </div>

            <Modal
                open={!!activeModalWithData}
                onClose={hideModal}

            >

                <Box sx={{...style , width : 440}}>
                    <div> {comprehensiveDescription.split("\n").map((line, idx) => (
                        <p key={idx} className="text-gray-700">{line}</p>
                    ))}</div>
                </Box>

            </Modal>

        </>
    )
}

export default ComprehensiveInsuranceTile