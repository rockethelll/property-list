import HeroPattern from './components/HeroPattern';
import { Property, useFetch } from './hooks/useFetch';
import { usePropertyStore } from './state/propertyStore';
import FiltersComponent from './components/FiltersComponent';

function App() {
  const { filterProperties } = usePropertyStore();
  const { data } = useFetch();

  const filteredProperties = data ? filterProperties(data) : [];

  return (
    <main className='relative flex flex-col items-center min-h-screen bg-background text-foreground'>
      <HeroPattern />
      <FiltersComponent />
      <section className='relative mx-auto max-w-[1136px] w-70% mt-40'>
        {filteredProperties.map((property: Property) => (
          <div key={property.id}>
            <h2>Title: {property.title}</h2>
            <p>Location: {property.location}</p>
            <p>Bedrooms: {property.capacity.bedroom}</p>
            <p>Superhost: {property.superhost ? 'Superhost' : 'Not Superhost'}</p>
            <hr />
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
