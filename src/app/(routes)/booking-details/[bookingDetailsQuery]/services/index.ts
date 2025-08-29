import { axiosInstance } from "@/axiosInstance";
import { apiEndponts } from "@/constant/apiEndpoints";
import { ApiResponse } from "@/types/ApiResponse";
import { BookingDetailsI } from "@/types/interface";


export const getSingleInvertoryService = async (params : any): Promise<ApiResponse<BookingDetailsI>> => {
    const queryString = new URLSearchParams(params).toString();
    const res = await axiosInstance.get(apiEndponts.GET_SINGLE_CAR_INVENTORY(queryString));
    // const res = await axios.get("https://d00eab3263c6.ngrok-free.app/" + apiEndponts.GET_ALL_INVENTORY());
    return res.data;
}