import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NavProps } from '../../types/types';

const Nav: FC<NavProps> = ({ handleClick }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item" onClick={handleClick}>
          <NavLink to="/">Rick and Morty</NavLink>
        </li>
        <li className="nav__item" onClick={handleClick}>
          <NavLink to="/about">About </NavLink>
        </li>
        <li className="nav__item" onClick={handleClick}>
          <NavLink to="/form">Form</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
