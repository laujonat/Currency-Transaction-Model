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
    let name;
    switch(userName) {
      case 'userA':
        name = 'Lilo';
        break;
      case 'userB':
        name = 'Sam';
        break;
      default:
        name = 'Nameless';
        break;
    }

    // const name = userName === 'userA' ? 'Lilo' : 'Sam';

    return (
      <div className="componentContainer">
        <span>{ name } has {this.props.walletAmt} borkCoins.</span>
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
