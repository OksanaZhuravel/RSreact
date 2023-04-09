import React from 'react';
import { SearchBarProps } from '../../types/types';

const SearchBar: React.FC<SearchBarProps> = ({ filter, setFilter }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, query: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        value={filter.query}
        onChange={handleInputChange}
        placeholder="Search name..."
        type="text"
        className="search__input"
      />
      <button type="submit" className="search__button">
        search
      </button>
    </form>
  );
};

export default SearchBar;
