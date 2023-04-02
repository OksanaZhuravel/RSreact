import { useState, useEffect } from 'react';

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    const searchValue = localStorage.getItem('searchValue');
    if (searchValue) {
      setSearchValue(searchValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchValue', searchValue);
  }, [searchValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('searchValue:', searchValue);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search__input"
        placeholder="Search"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button type="submit" className="search__button">
        search
      </button>
    </form>
  );
}

export default SearchBar;
