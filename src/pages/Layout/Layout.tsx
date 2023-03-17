// import { Link, Outlet } from 'react-router-dom';

// const Layout = () => {
//   return (
//     <>
//       <form id="search-form" role="search">
//         <input id="q" aria-label="Search" placeholder="Search" type="search" name="q" />
//       </form>
//       <nav>
//         <ul>
//           <li>
//             <Link to={`/about`}>About</Link>
//           </li>
//         </ul>
//       </nav>
//       <h3>Layout</h3>
//       <Outlet />
//     </>
//   );
// };
// export default Layout;

import React from 'react';

export default class Layout extends React.Component {
  state = {
    text: 'Layout',
  };
  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
    setTimeout(() => this.setState({ text: 'Обновленный React-компонент' }), 1000);
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    console.log('render');
    return <h1>{this.state.text}</h1>;
  }
}
