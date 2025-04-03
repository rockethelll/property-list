import HeroPattern from './components/HeroPattern';
// import { useFetch } from './hooks/useFetch';
// import { usePropertyStore } from './state/propertyStore';
import FiltersComponent from './components/FiltersComponent';

function App() {
  // const { filters } = usePropertyStore();
  // const { data, isLoading, error } = useFetch(filters);
  return (
    <main className='relative flex flex-col items-center min-h-screen bg-background text-foreground'>
      <HeroPattern />
      <FiltersComponent />
      {/* <section className='relative mx-auto max-w-[1136px] w-full bg-blue-200'>qsdfqs</section> */}
    </main>
  );
}

export default App;
