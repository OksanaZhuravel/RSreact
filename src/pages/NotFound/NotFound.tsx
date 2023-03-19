import { Component } from 'react';

export default class NotFound extends Component {
  render(): React.ReactNode {
    return (
      <div style={{ textAlign: 'center', width: '100%' }}>
        <h2>Oops!</h2>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    );
  }
}
