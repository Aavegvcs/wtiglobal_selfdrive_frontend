import React, {  useRef, useState } from 'react'
import FieldWrapper from '@/app/PathWatcherForHeroSection/HeroSection/components/fieldsBox/FieldWrapper'
import FieldLabel from '@/app/PathWatcherForHeroSection/HeroSection/components/fieldsBox/FieldLabel'
import FieldValue from '@/app/PathWatcherForHeroSection/HeroSection/components/fieldsBox/FieldValue'
// import { SelectedTime } from '../../types/types'
import TimeSlabList from '@/app/PathWatcherForHeroSection/HeroSection/components/TimeSlabList'
import { useClickAway } from 'react-use'




export type DateFieldProps = {
    label: string,
    value: string,
    placeholder: string,  
    onSelect: (val: string) => void,

}


const TimePickerField = ({ label, value, placeholder,  onSelect }: DateFieldProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const ref = useRef<HTMLDivElement>(null);

    const closeHandler = () => setIsOpen(false);

    // CLICK OUT SIDE
    useClickAway(ref, closeHandler);

    return (
        <div className='relative'>
            <div ref={ref} onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
            }} >
                <FieldWrapper>
                    <FieldLabel label={label} isIcon={false} />
                    <FieldValue valueText={value} placeholder={placeholder} />
                </FieldWrapper>
                {
                    isOpen && <TimeSlabList onSelect={onSelect} />
                }
            </div>



        </div>
    )
}

export default TimePickerField