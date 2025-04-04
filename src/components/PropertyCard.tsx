import { type Property } from '../lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from './ui/card';
import home from '../assets/Home_duotone.svg';
import user from '../assets/User_alt_duotone.svg';
import star from '../assets/Starfill.svg';
import SuperHost from './SuperHost';

type PropertyCardProps = {
  property: Property;
};

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card key={property.id} className='w-[320px] min-h-[480px] flex flex-col'>
      <div className='relative'>
        <img
          src={property.image}
          alt={property.title}
          className='rounded-t-xl w-full h-[200px] object-cover'
        />
        {property.superhost && <SuperHost />}
      </div>
      <div className='flex flex-col p-5'>
        <CardTitle className='line-clamp-1 mb-2'>{property.title}</CardTitle>
        <CardContent className='text-muted-foreground p-0'>
          <p className=''>{property.description}</p>
        </CardContent>
        <CardDescription className='flex gap-2 my-4'>
          <div className='flex items-center gap-2'>
            <img src={home} alt='House icon' />
            <p className='text-muted-foreground text-[12px] '>
              {property.capacity.bedroom > 1
                ? `${property.capacity.bedroom} bedrooms`
                : `${property.capacity.bedroom} bedroom`}
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <img src={user} alt='User icon' />
            <p className='text-muted-foreground text-[12px] '>
              {property.capacity.people > 1
                ? `${property.capacity.people} guests`
                : `${property.capacity.people} guest`}
            </p>
          </div>
        </CardDescription>
        <hr className='border-border-1' />
        <CardFooter className='flex justify-between p-0 mt-4'>
          <p className='text-foreground text-[20px] font-bold'>
            $ {property.price} <span className='text-muted-foreground text-sm'>/night</span>
          </p>
          <div className='flex items-center gap-2'>
            <img src={star} alt='Star icon' />
            <p>{property.rating}</p>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default PropertyCard;
