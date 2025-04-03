type FilterButton = {
  label: string;
  location: 'All Stay' | 'Norway' | 'Finland' | 'Sweden' | 'Switzerland';
};

export const filtersButtons: FilterButton[] = [
  {
    label: 'All Stay',
    location: 'All Stay',
  },
  {
    label: 'Norway',
    location: 'Norway',
  },
  {
    label: 'Finland',
    location: 'Finland',
  },
  {
    label: 'Sweden',
    location: 'Sweden',
  },
  {
    label: 'Switzerland',
    location: 'Switzerland',
  },
];
