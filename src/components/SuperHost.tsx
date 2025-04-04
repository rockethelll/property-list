import star from '../assets/Starfill.svg';

const SuperHost = () => {
  return (
    <div className='absolute top-2 left-2 bg-superhost flex items-center gap-1 text-foreground px-5 py-1 text-sm font-bold rounded-full'>
      Superhost
      <img src={star} alt='Star icon' />
    </div>
  );
};

export default SuperHost;
