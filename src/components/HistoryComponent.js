import React, { Component } from 'react';
import { connect } from "react-redux";
import CurrencyWidget from './CurrencyWidget';
import HistoryItem from './HistoryItem';

// this component has not been implemented to the actual project.

class History extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const entries = this.props.history;
    const list = entries.map((t, i) => <HistoryItem transaction={t} idx={i} />);

    return (
      <ul>
        { list }
      </ul>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  history: state.history,
  state: state
});

export default connect(mapStateToProps)(History);
