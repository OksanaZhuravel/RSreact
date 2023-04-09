import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';
import { DataApi } from '../../types/types';

function Layout() {
  const [data, setData] = useState<DataApi[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка HTTP ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        // Обработка успешного ответа
        console.log(data.results);

        setData(data.results);
      })
      .catch((error) => {
        // Обработка ошибки
        console.error(error);
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
    </div>
  );
}

export default Layout;
