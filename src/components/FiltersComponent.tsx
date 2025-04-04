import { SelectContent } from '@radix-ui/react-select';
import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { filtersButtons } from '@/constants/filters';
import { usePropertyStore } from '@/state/propertyStore';

const FiltersComponent = () => {
  const {
    isSuperhost,
    setIsSuperhost,
    selectedLocation,
    setSelectedLocation,
    selectedBedroom,
    setSelectedBedroom,
  } = usePropertyStore();

  return (
    <section
      aria-label='Property filters'
      className='absolute top-[360px] lg:h-28 lg:top-[560px] left-[50%] translate-x-[-50%] flex lg:flex-row flex-col items-center justify-center px-10 py-8 border bg-superhost rounded-xl border-border-1 lg:max-w-[1136px] lg:w-[90%] z-10'
    >
      <div className='grid grid-cols-2 gap-3 w-full max-w-[250px] sm:max-w-none lg:max-w-none lg:mb-0 mb-6 text-foreground sm:flex sm:flex-row lg:gap-2 lg:flex-wrap'>
        {filtersButtons.map((filterButton, index) => (
          <Button
            key={filterButton.label}
            variant={selectedLocation === filterButton.location ? 'default' : 'ghost'}
            className={`px-3 py-2 cursor-pointer hover:bg-white/40 rounded-xl ${
              index === filtersButtons.length - 1 ? 'col-span-2' : ''
            }`}
            onClick={() => setSelectedLocation(filterButton.location)}
          >
            {filterButton.label}
          </Button>
        ))}
      </div>
      <div className='flex flex-col sm:flex-row items-center gap-4'>
        <div className='flex items-center space-x-2 lg:mb-0 lg:pr-5'>
          <Switch id='superhost' checked={isSuperhost} onCheckedChange={setIsSuperhost} />
          <Label htmlFor='superhost'>Superhost</Label>
      </div>
      <Select value={selectedBedroom} onValueChange={setSelectedBedroom}>
        <SelectTrigger className='w-[180px] px-6'>
          <SelectValue placeholder='Bedrooms' />
        </SelectTrigger>
        <SelectContent
          position='popper'
          side='bottom'
          className='bg-superhost w-[180px] rounded-md border border-border-1'
        >
          <SelectGroup>
            <SelectLabel>Bedrooms</SelectLabel>
            <SelectItem value='all'>All Bedrooms</SelectItem>
            <SelectItem value='1'>1</SelectItem>
            <SelectItem value='2'>2</SelectItem>
          </SelectGroup>
        </SelectContent>
        </Select>
      </div>
    </section>
  );
};

export default FiltersComponent;
