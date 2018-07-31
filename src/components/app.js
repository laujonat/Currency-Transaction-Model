import React, { Component } from 'react';
// import CurrencyWidget from './CurrencyWidget';
import User from './UserComponent';
import { names } from '../reducers/selectors';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <User id={names.userA} />
        <User id={names.userB} />
      </React.Fragment>
    );
  }
}
