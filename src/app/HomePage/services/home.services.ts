import { axiosInstance } from "@/axiosInstance"
import { apiEndponts } from "@/constant/apiEndpoints"
import { ApiResponse } from "@/types/ApiResponse";
import { CarInvertoryI, CarRentalLocationResultI } from "@/types/interface";

export const getInvertoryService = async (): Promise<ApiResponse<CarInvertoryI[]>> => {
    const res = await axiosInstance.get(apiEndponts.GET_INVENTORY_AT_DAILY_HOME_PAGE());
    return res.data;
}

export const getCarRentalLocationOnCountryService = async (countryCode: string): Promise<ApiResponse<CarRentalLocationResultI>> => {
    const res = await axiosInstance.get(apiEndponts.GET_CAR_RANTAL_LOCATION_ON_COUNTRY(countryCode));
    return res.data;
}

export const addContactUsQueryService = async () => {
    const res = await axiosInstance.post(apiEndponts.ADD_USER_CONTACT_QUERY());
    return res.data;
}


