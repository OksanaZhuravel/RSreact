import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';
import { DataApi } from '../../types/types';
import Loader from '../../components/Loader/Loader';

function Layout() {
  const [data, setData] = useState<DataApi[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState({ query: '' });

  const fetchData = async (query: string) => {
    setIsLoading(true);

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?name=${query}`);
      if (!response.ok) {
        if (response.status === 404) {
          setError('Not found');
        } else {
          throw new Error('HTTP Error ' + response.status);
        }
      } else {
        const data = await response.json();
        setData(data.results);
        setError(null);
      }
    } catch (error) {
      const errorMessage = (error as Error).message;
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchData(filter.query);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [filter.query]);

  return (
    <div className="main">
      {isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Loader />
        </div>
      )}

      {!isLoading && !error && (
        <>
          <SearchBar filter={filter} setFilter={setFilter} fetchSearchData={fetchData} />
          {data.length > 0 ? (
            <div className="main__cards" data-testid="cards-list">
              {data.map((item) => {
                return <Card item={item} key={item.id} />;
              })}
            </div>
          ) : (
            <>
              <SearchBar filter={filter} setFilter={setFilter} fetchSearchData={fetchData} />
              <h1 style={{ textAlign: 'center', marginTop: '50px', color: '#d3c7de' }}>
                No data available
              </h1>
            </>
          )}
        </>
      )}

      {error && (
        <>
          <SearchBar filter={filter} setFilter={setFilter} fetchSearchData={fetchData} />
          <h1 style={{ textAlign: 'center', marginTop: '50px', color: '#d3c7de' }}>{error}</h1>{' '}
        </>
      )}
    </div>
  );
}

export default Layout;
