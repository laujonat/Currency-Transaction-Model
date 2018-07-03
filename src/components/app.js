import React, { Component } from 'react';
// import CurrencyWidget from './CurrencyWidget';
import User from './UserComponent';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <User id={"userA"}/>
        <User id={"userB"}/>
      </React.Fragment>
    );
  }
}
