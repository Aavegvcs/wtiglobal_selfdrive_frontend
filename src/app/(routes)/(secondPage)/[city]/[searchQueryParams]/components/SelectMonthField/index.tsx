import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import FieldWrapper from "../ui/FieldWrapper";
import FieldLabel from "../ui/FieldLabel";
import FieldValue from "../ui/FieldValue";
import SelectMonthDropDown from "@/component/SelectMonthDropDown";

type SelectMonthFieldProps = {
    label: string,
    value: number,
    placeholder: string
    onClick: (val: number) => void,
}

const SelectMonthField = ({ label, value, placeholder, onClick }: SelectMonthFieldProps) => {
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
                    <FieldValue valueText={`${value} Months`} placeholder={placeholder} />
                </FieldWrapper>
                {
                    isOpen && <SelectMonthDropDown onClick={onClick} />
                }

            </div>
        </div>
    )
}

export default SelectMonthField