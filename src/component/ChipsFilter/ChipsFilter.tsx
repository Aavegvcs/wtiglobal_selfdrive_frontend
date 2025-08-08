"use client";
import { ChipsOptionI } from "@/types/interface";
import React from "react";
import ChipsOption from "@/component/ui/ChipsOption/ChipsOption";

type ChipsFilterProps = {
  selectedChips: ChipsOptionI | undefined;
  onSelect: (val: ChipsOptionI) => void;
  chipsOptionList: ChipsOptionI[];
};

const ChipsFilter = ({
  selectedChips,
  onSelect,
  chipsOptionList,
}: ChipsFilterProps) => {
  return (
    <div className="flex flex-wrap gap-4 items-center py-5 mx-auto mb-4">
      {chipsOptionList.map((option: ChipsOptionI, i: number) => (
        <ChipsOption
          key={i}
          option={option}
          selectedVal={selectedChips}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default ChipsFilter;
