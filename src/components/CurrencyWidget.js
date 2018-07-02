import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCurrencies } from "../actions/curr_actions";
import CurrencyDropdown from './CurrencyDropdown';

class CurrencyWidget extends Component {
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
    this.getRates = this.getRates.bind(this);
  }

  componentDidMount() {
    const first = this.state.currencyType1;
    const second = this.state.currencyType2;
    this.getRates(first, second);

  }

  getRates(curr1, curr2) {
    const host = 'http://free.currencyconverterapi.com/';

    fetch(`${host}api/v5/convert?q=${curr1}_${curr2},${curr2}_${curr1}&compact=ultra`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const oneToTwo = curr1 + "_" + curr2;
        const twoToOne = curr2 + "_" + curr1;

        this.setState({
          rate1To2: json[oneToTwo],
          rate2To1: json[twoToOne],
          currencyAmount2: this.state.currencyAmount1 * json[oneToTwo]
        }, () => console.log(this.state));
      });
  }

  amountChange(field) {
    let from;
    let to;
    let rate;

    if (field === '1') {
      from = 'currencyAmount1';
      to = 'currencyAmount2';
      rate = this.state.rate1To2;
    } else {
      from = 'currencyAmount2';
      to = 'currencyAmount1';
      rate = this.state.rate2To1;
    }

    return (
      (e) => {
        e.preventDefault();
        this.setState({
          [from]: e.target.value,
          [to]: e.target.value * rate
        }, () => console.log(this.state));
      }
    );
  }

  currencyChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.getRates(this.state.currencyType1, this.state.currencyType2);
    });
  }

  render() {
    const dropdown = <CurrencyDropdown />;

    return (
      <form>
        <div className="inputSection">
          <input
            type='number'
            onChange={this.amountChange('1')}
            value={this.state.currencyAmount1}
          ></input>

          <select
            onChange={this.currencyChange}
            name="currencyType1"
            value={this.state.currencyType1}
          >{dropdown}</select>
        </div>
        <div className="inputSection">
          <input
            type='number'
            onChange={this.amountChange('2')}
            value={this.state.currencyAmount2}
          ></input>

          <select
            onChange={this.currencyChange}
            name="currencyType2"
            value={this.state.currencyType2}
          >{dropdown}</select>
        </div>
        <button>fly birdie fly</button>
      </form>
    );
  }
}

export default CurrencyWidget;
