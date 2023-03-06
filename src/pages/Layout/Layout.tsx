import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div>
        Layout
        <nav>
          <ul>
            <li>
              <Link to={`/about`}>About</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
