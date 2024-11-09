import {create} from 'zustand'
import { persist } from 'zustand/middleware'

export const useMainStore = create(persist((set)=>({
    login: false,
    setLogin: (value) => set({ login: value }),
})))