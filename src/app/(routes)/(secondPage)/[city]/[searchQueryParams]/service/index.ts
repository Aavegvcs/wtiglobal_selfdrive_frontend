import { InventryQueryT } from "@/app/PathWatcherForHeroSection/HeroSection/types/types";
import { axiosInstance } from "@/axiosInstance";
import { apiEndponts } from "@/constant/apiEndpoints";
import { ApiResponse } from "@/types/ApiResponse";
import { CarInvertoryI } from "@/types/interface";

export const getAllInvertoryService = async (body : InventryQueryT): Promise<ApiResponse<CarInvertoryI[]>> => {
    const res = await axiosInstance.post(apiEndponts.GET_ALL_INVENTORY(), body);
    return res.data;
}