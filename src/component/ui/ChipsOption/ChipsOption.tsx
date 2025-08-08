import { bgColors, gradientColor, textColors } from "@/constant/colors";
import { ChipsOptionI } from "@/types/interface";
import React from "react";

type ChipsOptionProps = {
  option: ChipsOptionI;
  selectedVal: ChipsOptionI | undefined;
  onSelect: (value: ChipsOptionI) => void;
};

const selectedBtn = `${gradientColor.primaryGradientColor} ${textColors.textWhite}`;
const unSelectedBtn = `${bgColors.bgWhite} ${textColors.lightBlack} `;

const ChipsOption: React.FC<ChipsOptionProps> = ({
  option,
  selectedVal,
  onSelect,
}) => {
  const isSelected: boolean = selectedVal?.value === option?.value;

  return (
    <button
      className={`${
        isSelected ? selectedBtn : unSelectedBtn
      } font-semibold text-sm py-3 px-7 rounded-[24px] shadow-[1px_1px_5px_0px_#0000001F] cursor-pointer`}
      onClick={() => onSelect(option)}
    >
      {option?.label}
    </button>
  );
};

export default ChipsOption;
