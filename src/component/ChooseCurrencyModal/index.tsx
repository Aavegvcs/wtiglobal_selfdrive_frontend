import { bgColors } from '@/constant/colors'
import { useSelectCurrencyModal } from '@/state/useSelectCurrencyModal'
import React, { ChangeEvent, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import InputField from '../ui/InputField/InputField'

const ChooseCurrencyModal = () => {
    const [selectCurrencyTemp, setSelectCurrencyTemp] = useState<string>("")
    const closeCurrencyModalAction = useSelectCurrencyModal((store) => store.closeCurrencyModalAction)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setSelectCurrencyTemp(e.target.value || "");

    

    return (
        <>
            <div className={`w-full h-[480px] rounded-3xl ${bgColors.bgWhite} relative`}>
                <div className='absolute right-0 top-0'>
                    <button onClick={closeCurrencyModalAction}><RxCross2 /></button>
                </div>
                <InputField value={selectCurrencyTemp} onChange={onChange} />



            </div>
        </>
    )
}

export default ChooseCurrencyModal