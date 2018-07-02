import React, { Component } from 'react';

import CurrencyDropdown from './CurrencyDropdown';

export default class CurrencyWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyType1: "USD",
      currencyType2: "BTC",
      currencyAmount1: 1,
      currencyAmount2: '',
      rate1To2: null,
      rate2To1: null
    };

    this.amountChange = this.amountChange.bind(this);
    this.currencyChange = this.currencyChange.bind(this);
  }

  componentDidMount() {
    const first = this.state.currencyType1;
    const second = this.state.currencyType2;
    const host = 'http://free.currencyconverterapi.com/';

    fetch(`${host}api/v5/convert?q=${first}_${second},${second}_${first}&compact=ultra`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const oneToTwo = first + "_" + second;
        const twoToOne = second + "_" + first;

        this.setState({
          rate1To2: json[oneToTwo],
          rate2To1: json[twoToOne],
          currencyAmount2: this.state.currencyAmount1 * json[oneToTwo]
        }, () => console.log(this.state));
      });
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

  amountChange(field) {
    const other = (field === '1') ? '2' : '1';
    return (
      (e) => {
        // const calc = e.target.value * this.state[`rate${field}To${other}`];
        console.log(`rate${field}To${other}`);
        console.log(this.state);
        console.log(this.state[`rate${field}To${other}`]);
        // this.setState({
        //   [`currencyAmount${field}`]: e.target.value,
        //   [`currencyAmount${other}`]: calc
        // }, () => {
        //   console.log(this.state);
        //   // dispatch action
        //   // return back is conversion rate
        //   // do calculation from currencyAmount1 to currencyAmount2
        // });
      }
    );
  }

  render() {
    const dropdown = <CurrencyDropdown />;

    return (
      <form>
        <input
          type='number'
          onChange={this.amountChange('1')}
          value={this.state.currencyAmount1}
        ></input>

        <select
          onChange={this.currencyChange('currencyType1')}
          value={this.state.currencyType1}
        >{dropdown}</select>

        <input
          type='number'
          onChange={() => console.log("hello")}
          value={this.state.currencyAmount2}
        ></input>

        <select
          onChange={this.currencyChange('currencyType2')}
          value={this.state.currencyType2}
        >{dropdown}</select>

        <button>fly birdie fly</button>
      </form>
    );
  }
}
