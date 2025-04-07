import star from '../assets/Starfill.svg';

const SuperHost = () => {
  return (
    <div className='h-5 absolute flex items-center gap-1 px-3 py-1 text-sm font-bold rounded-full top-2 left-2 bg-superhost text-foreground text-[10px]'>
      Superhost
      <img src={star} alt='Star icon' className='h-4' />
    </div>
  );
};

export default SuperHost;
