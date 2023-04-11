import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';

function Header() {
  const location = useLocation();
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    const pages = {
      '/': 'Rick and Morty',
      '/about': 'About Rick and Morty',
      '/form': 'Form',
    };
    const titleName = pages[location.pathname as keyof typeof pages];
    setTitle(titleName || '');
  }, [location.pathname]);

  const updatePage = () => {
    setTitle(location.pathname === '/' ? 'Rick and Morty' : '');
  };

  return (
    <header className="header">
      <Nav handleClick={updatePage} />
      <p className="header__title">{title}</p>
    </header>
  );
}

export default Header;
