import React from 'react';
import { connect } from 'react-redux';

const dropdown = function({ currencies }) {
  const currObj = Object.keys(currencies).sort();

  return currObj.map((curr, idx) => (
    <option key={idx} value={currencies[curr]}>{curr}</option>
  ));
};

const mapStateToProps = state => ({
  currencies: state.currencies.curr,
});

export default connect(mapStateToProps)(dropdown);
