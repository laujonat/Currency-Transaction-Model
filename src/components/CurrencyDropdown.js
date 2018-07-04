import React from 'react';
import { connect } from 'react-redux';

const dropdown = function({ currencies }) {
  const currObj = Object.keys(currencies).sort();

  return currObj.map((c, idx) => (
    <option key={idx} value={currencies[c]}>{c} ({currencies[c]})</option>
  ));
};

const mapStateToProps = state => ({
  currencies: state.currencies.curr,
});

export default connect(mapStateToProps)(dropdown);
