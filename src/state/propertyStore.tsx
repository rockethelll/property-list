import { create } from "zustand";

type PropertyStore = {
  filters?: string;
  setFilters: (filters: string) => void;
};

export const usePropertyStore = create<PropertyStore>((set) => ({
  filters: undefined,
  setFilters: (filters) => set({ filters }),
}));
