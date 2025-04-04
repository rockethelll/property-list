import HeroPattern from './components/HeroPattern';
import { useFetch } from './hooks/useFetch';
import { usePropertyStore } from './state/propertyStore';
import FiltersComponent from './components/FiltersComponent';
import PropertyCard from './components/PropertyCard';

function App() {
  const { filterProperties } = usePropertyStore();
  const { data } = useFetch();

  const filteredProperties = data ? filterProperties(data) : [];

  return (
    <main className='relative flex flex-col items-center min-h-screen bg-background text-foreground'>
      <HeroPattern />
      <FiltersComponent />

      <section className='max-w-[1136px] mt-70 sm:mt-40 px-10 lg:mt-24'>
        <h2 className='mb-8 text-2xl font-bold'>Over 200 Stays</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[72px] lg:gap-8 items-center justify-center'>
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
