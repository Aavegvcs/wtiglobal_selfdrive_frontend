import React, { useRef, useState } from 'react'
import { useClickAway } from 'react-use';
import FieldWrapper from '@/app/PathWatcherForHeroSection/HeroSection/components/fieldsBox/FieldWrapper';
import FieldLabel from '@/app/PathWatcherForHeroSection/HeroSection/components/fieldsBox/FieldLabel';
import FieldValue from '@/app/PathWatcherForHeroSection/HeroSection/components/fieldsBox/FieldValue';
import { bgColors } from '@/constant/colors';
import AutoComplete from '@/component/AutoComplete';
import { LocationFieldI } from '../../types/types';

type LocationFieldProps = {
    label: string,
    value: string,
    placeholder: string
    onClick: (val: LocationFieldI) => void,
    locationList?: LocationFieldI[]
}


const LocationField = ({ label, value, placeholder, onClick , locationList =[] }: LocationFieldProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const ref = useRef<HTMLDivElement>(null);

    const closeHandler = () => setIsOpen(false);


    // CLICK OUT SIDE
    useClickAway(ref, closeHandler);

    return (
        <div className='relative'>
            <div ref={ref} onClick={() => setIsOpen(!isOpen)}>
                <FieldWrapper>
                    <FieldLabel label={label} isIcon={false} />
                    <FieldValue valueText={value} placeholder={placeholder} />
                </FieldWrapper>
                {
                    isOpen && <AutoComplete onClick={onClick} locationList={locationList} />
                }
            </div>
        </div>
    )
}

export default LocationField