import { axiosInstance } from "@/axiosInstance"
import { apiEndponts } from "@/constant/apiEndpoints"

export const getInvertoryService = async () => {
    const res = await axiosInstance.get(apiEndponts.GET_INVENTORY());
    return res;
}