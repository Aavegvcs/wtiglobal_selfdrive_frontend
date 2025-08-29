import { create } from "zustand"
import { devtools } from "zustand/middleware"


type State = {
    isModalOpen: boolean
}

type Actions = {
    openAuthModalAction: () => void,
    closeAuthModalAction: () => void,
}




export const authModalState = create<State & Actions>()(devtools((set) => ({
    isModalOpen: false,

    openAuthModalAction: () => set({ isModalOpen: true }),
    closeAuthModalAction: () => set({ isModalOpen: false })
})))