import React, { Component } from 'react';
import { connect } from "react-redux";
import CurrencyWidget from './CurrencyWidget';

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="widgetContainer">
        <span>{this.props.userName} has {this.props.walletAmt} jonCoins.</span>
        <CurrencyWidget user={this.props.userName}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  walletAmt: state.users[ownProps.id],
  userName: ownProps.id
});

export default connect(mapStateToProps)(User);
