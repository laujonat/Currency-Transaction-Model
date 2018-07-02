import React, { Component } from 'react';

export default class CurrencyWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyType1: "USD",
      currencyType2: "BTC",
      currencyAmount1: 0,
      currencyAmount2: null,
      rate1To2: null,
      rate2To1: null,
    };

    this.currencyChange = this.currencyChange.bind(this);
  }

  componentDidMount() {
    // call api with this.state.currencyType1, this.state.currencyType2
    // const conversionRate = ___;
    // this.setState({ converstionRate });
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
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <button>fly birdie fly</button>
      </form>
    );
  }
}
