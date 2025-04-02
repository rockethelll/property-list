import { useFetch, Property } from "./hooks/useFetch";

function App() {
  const { data, isLoading, error } = useFetch();
  return (
    <div className='bg-red-500'>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          {data.map((property: Property) => (
            <div key={property.id}>{property.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
