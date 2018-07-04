import React, { Component } from 'react';
import { connect } from "react-redux";
import CurrencyWidget from './CurrencyWidget';

// this component has not been implemented to the actual project.

class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>Hi</div>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  history: state.history
});

// state.history doesn't exist yet.

export default connect(mapStateToProps)(TransactionHistory);
