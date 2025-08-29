"use client";
import { inventoryCategoryList } from "@/data/data";
import { CarInvertoryI, ChipsOptionI } from "@/types/interface";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react"
import { getInvertoryService } from "../services/home.services";
import { ApiResponse } from "@/types/ApiResponse";


export const useGetInvertory = () => {
    const [selectedInventoryCategory, setSelectedInventoryCategory] = useState<ChipsOptionI | undefined>(inventoryCategoryList[0]);
    const onSelectHandler = (valueChip: ChipsOptionI) => setSelectedInventoryCategory(valueChip);

    const { isLoading, data, error } = useQuery<ApiResponse<CarInvertoryI[]>, Error>({
        queryKey: ["getInventoryDailyHome"],
        queryFn: getInvertoryService
    });


    return {
        selected: selectedInventoryCategory,
        onSelectHandler: onSelectHandler,
        inventryList: data?.result ?? [],
        isLoading: isLoading,
        error: error
    }
}