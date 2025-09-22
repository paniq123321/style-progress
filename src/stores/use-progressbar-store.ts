import { create } from 'zustand'


interface ProgressbarStoreState {
  progress: number;
  setProgress: (progress: number) => void;
}
export const useProgressbarStore= create<ProgressbarStoreState>((set) => ({
  progress: 0,
  setProgress: (progress) => set(() => ({ progress })),
}))