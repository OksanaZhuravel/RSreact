import React from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <h2>Oops!</h2>
        <p>Sorry, an unexpected error has occurred.</p>
        <Link to={`/`}>Link Home page</Link>
      </div>
    );
  }
}
