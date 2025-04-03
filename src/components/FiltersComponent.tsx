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

const FiltersComponent = () => {
  return (
    <div className='flex flex-col items-center justify-center px-10 py-8 border bg-superhost rounded-xl border-border-1'>
      <div className='grid grid-cols-2 gap-3 w-[250px] mb-6'>
        <button className='px-3 py-2 cursor-pointer hover:bg-white/15 rounded-xl'>All Stays</button>
        <button className='px-3 py-2 cursor-pointer hover:bg-white/15 rounded-xl'>Norway</button>
        <button className='px-3 py-2 cursor-pointer hover:bg-white/15 rounded-xl'>Finland</button>
        <button className='px-3 py-2 cursor-pointer hover:bg-white/15 rounded-xl'>Sweden</button>
        <button className='col-span-2 px-3 py-2 cursor-pointer hover:bg-white/15 rounded-xl sm:col-span-1'>
          Switzerland
        </button>
      </div>
      <div className='flex items-center mb-5 space-x-2'>
        <Switch id='superhost' />
        <Label htmlFor='superhost'>Superhost</Label>
      </div>
      <Select>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Property Type' />
        </SelectTrigger>
        <SelectContent position='popper' side='bottom' className='bg-superhost w-[180px] rounded-md border border-border-1'>
          <SelectGroup>
            <SelectLabel>Bedrooms</SelectLabel>
            <SelectItem value='1'>1</SelectItem>
            <SelectItem value='2'>2</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FiltersComponent;
