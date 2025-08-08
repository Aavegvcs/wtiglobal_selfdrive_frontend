"use client"
import AutoComplete from "@/component/AutoComplete";
import FieldLabel from "../ui/FieldLabel";
import FieldValue from "../ui/FieldValue";
import FieldWrapper from "../ui/FieldWrapper";
import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { LocationFieldI } from "@/app/PathWatcherForHeroSection/HeroSection/types/types";

type LocationFieldProps = {
    label: string,
    value: string,
    placeholder: string
    onClick: (val: LocationFieldI) => void,
    locationList?: LocationFieldI[]
}


const LocationField = ({ label, value, placeholder, onClick, locationList = [] }: LocationFieldProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const ref = useRef<HTMLDivElement>(null);

    const closeHandler = () => setIsOpen(false);


    // CLICK OUT SIDE
    useClickAway(ref, closeHandler);

    return (
        <div className='relative z-50'>
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