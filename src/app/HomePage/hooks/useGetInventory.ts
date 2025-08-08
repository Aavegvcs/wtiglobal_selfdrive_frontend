"use client";
import { inventoryCategoryList } from "@/data/data";
import { ChipsOptionI } from "@/types/interface";
import { useState } from "react"


export const useGetInvertory = () => {
    const [selectedInventoryCategory, setSelectedInventoryCategory] = useState<ChipsOptionI | undefined>(inventoryCategoryList[0]);
    const onSelectHandler = (valueChip: ChipsOptionI) => setSelectedInventoryCategory(valueChip);

    return {
        selected: selectedInventoryCategory,
        onSelectHandler: onSelectHandler
    }
}