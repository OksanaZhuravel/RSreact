import { Component } from 'react';
import { NavLink } from 'react-router-dom';

interface NavProps {
  handleClick: () => void;
}

class Nav extends Component<NavProps> {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item" onClick={this.props.handleClick}>
            <NavLink to="/">Shop</NavLink>
          </li>
          <li className="nav__item" onClick={this.props.handleClick}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav__item" onClick={this.props.handleClick}>
            <NavLink to="/form">Form</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
