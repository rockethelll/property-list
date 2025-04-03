import { useQuery } from '@tanstack/react-query';
import mockData from '../data/mockData.json';

const REAL_API_URL =
  'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json';
const USE_MOCK = import.meta.env.REACT_APP_USE_MOCK === 'true';

export type Property = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  superhost: boolean;
  location: string;
  capacity: {
    people: number;
    bedroom: number;
  };
  image: string;
};
const getProperties = async (filters?: string) => {
  if (USE_MOCK) return mockData;

  const response = await fetch(REAL_API_URL);
  if (filters) {
    const data = await response.json();
    return data.filter((property: Property) => property.location.includes(filters));
  }

  if (!response.ok) throw new Error('Failed to fetch data');

  return response.json();
};

export const useFetch = (filters?: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['properties', filters],
    queryFn: async () => getProperties(filters),
    staleTime: Infinity, // Never re-fetch data
    gcTime: Infinity, // Changed from cacheTime to gcTime
  });

  return { data, isLoading, error };
};
