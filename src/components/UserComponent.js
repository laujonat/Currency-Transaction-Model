import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrencyWidget from './CurrencyWidget';
import HistoryComponent from './HistoryComponent';

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userName } = this.props;

    return (
      <div className="componentContainer">
        <span>{ userName } has {this.props.walletAmt} borkCoins.</span>
        <CurrencyWidget user={ userName }/>
        <HistoryComponent />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  walletAmt: state.users[ownProps.id],
  userName: ownProps.id
});

export default connect(mapStateToProps)(User);
