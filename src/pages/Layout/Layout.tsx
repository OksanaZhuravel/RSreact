import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';
import { DataApi } from '../../types/types';
import Loader from '../../components/Loader/Loader';

function Layout() {
  const [data, setData] = useState<DataApi[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка HTTP ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data.results);

        setData(data.results);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="main">
      <SearchBar />
      <div className="main__cards" data-testid="cards-list">
        {data.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
      {error && <h1> {error}</h1>}
      {isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default Layout;
