import { SelectedTime } from "@/app/PathWatcherForHeroSection/HeroSection/types/types";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import FieldWrapper from "../ui/FieldWrapper";
import FieldLabel from "../ui/FieldLabel";
import FieldValue from "../ui/FieldValue";
import TimeSlabList from "@/app/PathWatcherForHeroSection/HeroSection/components/TimeSlabList";
import { DateFieldProps } from "@/app/PathWatcherForHeroSection/HeroSection/components/TimePickerField";

// type DateFieldProps = {
//     label: string,
//     value: string,
//     placeholder: string,
//     timeSlabList: SelectedTime[],
//     onSelect: (val: SelectedTime) => void,
//     minDate: SelectedTime
// }


const TimePickerField = ({ label, value, placeholder, onSelect, }: DateFieldProps) => {
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