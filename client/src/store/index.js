
import { create } from 'zustand'

export const usePageStore = create((set) => ({
  page: 'welcome',
  setPage: (page) => set({ page }),
}));