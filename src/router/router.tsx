import Layout from '../pages/Layout/Layout';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/about',
        element: <About />,
        errorElement: <NotFound />,
      },
    ],
  },
]);
export default router;
