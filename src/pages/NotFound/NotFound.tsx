import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to={`/`}>Link Home page</Link>
    </div>
  );
};
export default NotFound;
