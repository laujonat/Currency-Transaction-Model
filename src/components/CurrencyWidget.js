import React, { Component } from 'react';

import CurrencyDropdown from './CurrencyDropdown';

export default class CurrencyWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyType1: "USD",
      currencyType2: "BTC",
      currencyAmount1: 0,
      currencyAmount2: null,
      rate1To2: null,
      rate2To1: null
    };

    this.currencyChange = this.currencyChange.bind(this);
  }

  componentDidMount() {
    const first = this.state.currencyType1;
    const second = this.state.currencyType2;

    fetch(`/api/v5/convert?q=${first}_${second},PHP_USD&compact=ultra`)
    // call api with this.state.currencyType1, this.state.currencyType2
      .then(
        // const conversionRate = ___;
        // this.setState({ converstionRate });

      )
  }

  currencyChange(field) {
    return (
      (e) => {
        this.setState({ [field]: e.target.value}, () => {
          console.log(this.state);
          // dispatch action
          // return back is conversion rate
          // do calculation from currencyAmount1 to currencyAmount2
        });
      }
    );
  }

  amountChange() {

  }

  render() {
    const dropdown = <CurrencyDropdown />;

    return (
      <form>
        <input
          type='number'
          onChange={() => console.log("hi")}
          placeholder={this.state.currencyAmount1}
        ></input>

        <select
          onChange={this.currencyChange('currencyType1')}
        >
          {dropdown}
        </select>

        <input
          type='number'
          onChange={() => console.log("hello")}
          placeholder={this.state.currencyAmount2}
        ></input>

        <select
          onChange={this.currencyChange('currencyType2')}
        >
          {dropdown}
        </select>

        <button>fly birdie fly</button>
      </form>
    );
  }
}
