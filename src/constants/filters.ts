type FilterButton = {
  label: string;
  onClick: () => void;
};

export const filtersButtons: FilterButton[] = [
  {
    label: 'All Stay',
    onClick: () => {
      console.log('clicked');
    },
  },
  {
    label: 'Norway',
    onClick: () => {
      console.log('clicked Norway');
    },
  },
  {
    label: 'Finland',
    onClick: () => {
      console.log('clicked Finland');
    },
  },
  {
    label: 'Sweden',
    onClick: () => {
      console.log('clicked Sweden');
    },
  },
  {
    label: 'Switzerland',
    onClick: () => {
      console.log('clicked Switzerland');
    },
  },
];
