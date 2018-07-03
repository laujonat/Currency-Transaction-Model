import React, { Component } from 'react';
import CurrencyWidget from './CurrencyWidget';

export default class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CurrencyWidget user={this.props.id}/>
    );
  }
}
