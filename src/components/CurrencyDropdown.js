import React from 'react';
import { connect } from 'react-redux';

const dropdown = function({ currencies }) {
  return currencies.map((curr, idx) => <option key={idx} value={curr}>{curr}</option>);
};


const mapStateToProps = state => ({
  currencies: state.currencies.curr,
});

export default connect(mapStateToProps)(dropdown);
