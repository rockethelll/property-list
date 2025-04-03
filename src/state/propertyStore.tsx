import { create } from 'zustand';
import { Property } from '@/hooks/useFetch';

type Location = 'All Stay' | 'Norway' | 'Finland' | 'Sweden' | 'Switzerland';
type Bedroom = 'all' | '1' | '2';

type PropertyStore = {
  isSuperhost: boolean;
  setIsSuperhost: (value: boolean) => void;
  selectedLocation: Location;
  setSelectedLocation: (location: Location) => void;
  selectedBedroom: Bedroom;
  setSelectedBedroom: (bedroom: Bedroom) => void;
  filterProperties: (properties: Property[]) => Property[];
};

export const usePropertyStore = create<PropertyStore>((set, get) => ({
  isSuperhost: false,
  setIsSuperhost: (value) => {
    set({ isSuperhost: value });
  },
  selectedLocation: 'All Stay',
  setSelectedLocation: (location) => set({ selectedLocation: location }),
  selectedBedroom: 'all',
  setSelectedBedroom: (bedroom) => set({ selectedBedroom: bedroom }),
  filterProperties: (properties) => {
    const { selectedLocation, isSuperhost, selectedBedroom } = get();

    return properties.filter((property) => {
      const locationMatch =
        selectedLocation === 'All Stay' || property.location === selectedLocation;
      const superhostMatch = !isSuperhost || property.superhost;
      const bedroomMatch =
        selectedBedroom === 'all' || property.capacity.bedroom === Number(selectedBedroom);

      return locationMatch && superhostMatch && bedroomMatch;
    });
  },
}));
