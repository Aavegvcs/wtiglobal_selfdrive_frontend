import { create } from "zustand";
import { devtools } from "zustand/middleware";




type State = {
    isCurrencyModalOpen: boolean;
    currencyName: string;
    currencyMultiplier: number;
}

type Actions = {
    openCurrencyModalAction: () => void,
    closeCurrencyModalAction: () => void,
    onSelecteCurrencyAction: () => void,
}


export const useSelectCurrencyModal = create<State & Actions>()(devtools((set) => ({
    isCurrencyModalOpen: false,
    openCurrencyModalAction: () => set({ isCurrencyModalOpen: true }),
    closeCurrencyModalAction: () => set({ isCurrencyModalOpen: false })
})))