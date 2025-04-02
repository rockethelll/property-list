import heroPatternMobile from '../assets/hero-image-sm.webp';
import heroPatternDesktop from '../assets/hero-image.webp';

const HeroPattern = () => {
  return (
    <section className='relative w-full'>
      <picture>
        <source srcSet={heroPatternMobile} media='(max-width: 640px)' />
        <source srcSet={heroPatternDesktop} media='(min-width: 641px)' />
        <img
          src={heroPatternMobile}
          alt='Hero Pattern'
          className='w-full lg:h-[620px] h-[400px] object-cover sm:object-bottom md:object-center'
        />
      </picture>
      <div className='absolute top-[108px] lg:top-[180px] left-16 md:left-28 lg:left-[140px] '>
        <h1 className='lg:text-[4rem] text-[2.5rem] text-background font-semibold w-[280px] lg:w-[500px]'>
          Peace, nature, dream
        </h1>
        <p className='text-background text-2xl w-[280px] lg:w-[400px] text-shadow-[0_0_6px_rgba(255,255,255,1)]'>
          Find and book a great experience.
        </p>
      </div>
    </section>
  );
};

export default HeroPattern;
