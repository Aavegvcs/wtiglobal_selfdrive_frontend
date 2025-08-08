import { LocationFieldI } from "@/app/PathWatcherForHeroSection/HeroSection/types/types";
import { axiosInstance } from "@/axiosInstance"
import { apiEndponts } from "@/constant/apiEndpoints";
import { ApiResponse } from "@/types/ApiResponse";


export const getSuggestedLocationListService = async (): Promise<ApiResponse<LocationFieldI[]>> => {
    const res = await axiosInstance.get(apiEndponts.GET_SUGGESTED_LOCATION());
    return res.data;
}