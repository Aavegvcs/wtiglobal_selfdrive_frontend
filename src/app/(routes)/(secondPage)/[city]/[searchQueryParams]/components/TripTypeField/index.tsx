import React, { useRef, useState } from 'react'
import FieldWrapper from '../ui/FieldWrapper'
import FieldLabel from '../ui/FieldLabel'
import FieldValue from '../ui/FieldValue'
import TripTypeDropDown from '@/component/TripTypeDropDown'
import { useClickAway } from 'react-use'


type TripTypeField = {
    textValue: string,
    code: number,
    onClick: (num: number) => void
}


const TripTypeField = ({ textValue, code, onClick }: TripTypeField) => {

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
            }}>
                <FieldWrapper>
                    <FieldLabel label='Trip Type' isIcon={false} />
                    <FieldValue valueText={textValue} placeholder='selected trip type' />
                </FieldWrapper>
                {isOpen && <TripTypeDropDown onClick={onClick} />}
            </div>
        </div>
    )
}

export default TripTypeField