import React, { Component } from 'react';
import { connect } from "react-redux";
import CurrencyWidget from './CurrencyWidget';

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
      <span>Wallet: {this.props.walletAmt}</span>
      <CurrencyWidget user={this.props.userName}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  walletAmt: state.users[ownProps.id],
  userName: ownProps.id
});

export default connect(mapStateToProps)(User);
