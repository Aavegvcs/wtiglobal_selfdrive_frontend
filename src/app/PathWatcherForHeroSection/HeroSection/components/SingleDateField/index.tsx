import React, { useRef, useState } from 'react'
import FieldWrapper from '../fieldsBox/FieldWrapper';
import FieldLabel from '../fieldsBox/FieldLabel';
import FieldValue from '../fieldsBox/FieldValue';
import { useClickAway } from 'react-use';
import MyDateSinglePicker from '../fieldsBox/MyDateSinglePicker';

type SingleDateFieldProps = {
    label: string,
    value: string,
    placeholder: string
    selectedDate: Date,
    onChange: (val: Date) => void,
    dateType: "START_DATE",
    minDate: Date
}

const SingleDateField = ({ label, value, placeholder, selectedDate, onChange, dateType, minDate } : SingleDateFieldProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const ref = useRef<HTMLDivElement>(null);

    const closeHandler = () => setIsOpen(false);

    // CLICK OUT SIDE
    useClickAway(ref, closeHandler);

    const onSelectedDateHandler = (dateVal: Date | undefined) => {
        if (dateVal) {
            onChange(dateVal);
            closeHandler();
        }
    }

    return (
        <>

            <div className='relative' ref={ref}>
                <div onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}   >
                    <FieldWrapper>
                        <FieldLabel label={label} isIcon={false} />
                        <FieldValue valueText={value} placeholder={placeholder} />
                    </FieldWrapper>
                </div>
                {
                    isOpen && <MyDateSinglePicker className='' minDate={minDate} selected={selectedDate} onClick={onSelectedDateHandler} />
                }
            </div>

        </>
    )
}

export default SingleDateField