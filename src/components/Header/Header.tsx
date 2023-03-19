import { Component } from 'react';
import Nav from '../../components/Nav/Nav';

interface HeaderState {
  title: string;
}

type HeaderProps = {
  [key: string]: never;
};

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      title: location.pathname === '/' ? 'Shop' : '',
    };
  }
  updatePage = () => {
    const pages = {
      '/': 'Shop',
      '/about': 'About',
    };
    const titleName = `${pages[location.pathname as keyof object]}`;
    this.setState({ title: titleName });
  };
  render() {
    return (
      <header className="header">
        <Nav handleClick={this.updatePage} />
        <p className="header__title">{this.state.title}</p>
      </header>
    );
  }
}

export default Header;
