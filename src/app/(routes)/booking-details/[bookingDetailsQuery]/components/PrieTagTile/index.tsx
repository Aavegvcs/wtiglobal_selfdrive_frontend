import React from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import { bgColors, textColors } from '@/constant/colors'
import Divider from '@/component/ui/Divider/Divider'
import { TariffForSingleInventoryI } from '@/types/helper.interface'

type PrieTagTileProps = {
    selectedTariff: TariffForSingleInventoryI | null,
    tarrifs: TariffForSingleInventoryI[]
    addSelectedTariffAction: (selectedTariff: TariffForSingleInventoryI) => void
    overRunfCost: number
}

const PrieTagTile = ({ selectedTariff, tarrifs, addSelectedTariffAction, overRunfCost }: PrieTagTileProps) => {
    const onSelectTariff = (selectedTariff: TariffForSingleInventoryI) => {
        addSelectedTariffAction(selectedTariff)
    }


    return (

        <div className='flex flex-col w-full mb-6'>
            <BookingDetailTileWrapper tileBgColor={bgColors.bgGray} borderRadius='rounded-t-sm' padding='p-2'>
                <div className='flex flex-col'>
                    {/* PRICE STRIPE */}
                    <div className='grid grid-cols-3 gap-2 '>
                        {
                            Array.isArray(tarrifs) && tarrifs.map((el, i) => {
                                const isSelctedTariff: boolean = el.tariff_type === selectedTariff?.tariff_type
                                const tarrifBgColor = isSelctedTariff ? bgColors.bgWhite : bgColors.bgTransparent

                                return <div
                                    className={`flex items-center flex-col ${tarrifBgColor} rounded-sm py-3 px-3 shadow-[0px_4px_4px_0px_#0000001F] cursor-pointer`}
                                    key={i}
                                    onClick={() => onSelectTariff(el)
                                    }
                                >
                                    <h4 className={`text-2xl font-medium ${textColors.textBlue}`}>
                                        AED {el.base}
                                    </h4>
                                    <span className={`font-normal text-[16px] ${textColors.lightGray}`}>{el.tariff_type}</span>
                                </div>
                            })}
                    </div>
                </div>
            </BookingDetailTileWrapper >

            <BookingDetailTileWrapper borderRadius='rounded-b-sm' padding='p-4'>
                <div className=''>
                    <div className='flex justify-between items-center'>
                        <span className={`text-[16px] ${textColors.lightBlack} font-medium`}>Included mileage limit</span>
                        <span className={`text-[16px] ${textColors.lightBlack} font-medium`}>{selectedTariff?.base} km</span>
                    </div>
                    <Divider color={bgColors.bgDivider} />
                    <div className='flex justify-between items-center'>
                        <span className={`text-[16px] ${textColors.lightBlack} font-medium`}>Additional mileage charge</span>
                        <span className={`text-[16px] ${textColors.lightBlack} font-medium`}>AED {overRunfCost}/km</span>
                    </div>
                </div>
            </BookingDetailTileWrapper>
        </div>
    )
}

export default PrieTagTile