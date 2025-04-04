import star from '../assets/Starfill.svg';

const SuperHost = () => {
  return (
    <div className='absolute flex items-center gap-1 px-5 py-1 text-sm font-bold rounded-full top-2 left-2 bg-superhost text-foreground'>
      Superhost
      <img src={star} alt='Star icon' />
    </div>
  );
};

export default SuperHost;
