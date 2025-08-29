import { TariffForSingleInventoryI } from "@/types/helper.interface"
import { BookingDetailsI } from "@/types/interface"
import { create } from "zustand"
import { devtools } from "zustand/middleware"


type State = {
    isLoading: boolean,
    signleBookingDetails: BookingDetailsI | null,
    selectedTariff: TariffForSingleInventoryI | null,
    bookingStep: number
}

type Actions = {
    addIsLoading: (isLoading: boolean) => void
    addSignleBookingDetailsAction: (bookingDetails: BookingDetailsI) => void,
    addSelectedTariffAction: (selectedTariff: TariffForSingleInventoryI) => void,
    nextStepAction: () => void,
    prevStepAction: () => void,
}


export const useBookingDetailsStore = create<State & Actions>()(devtools((set) => ({
    signleBookingDetails: null,
    selectedTariff: null,
    isLoading: false,
    bookingStep: 1,

    addIsLoading: (isLoading: boolean) => { set({ isLoading: isLoading }) },
    addSignleBookingDetailsAction: (signleBookingDetails: BookingDetailsI) => { set({ signleBookingDetails: signleBookingDetails }) },
    addSelectedTariffAction: (selectedTariff: TariffForSingleInventoryI) => { set({ selectedTariff: selectedTariff }) },

    nextStepAction: (state: State) => set(() => {


        return { bookingStep: 2 };
    }),
    prevStepAction: (state : State) => set(() => {

       
        return { bookingStep: 1 }
    }),
})))