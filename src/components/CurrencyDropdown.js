import React from 'react';

const currencies = ['USD', 'BTC'];

const dropdown = function({ active }) {
  // return currencies.map((curr) => {
  //   if (curr === active) {
  //     return <option defaultValue={curr}>curr</option>;
  //   } else {
  //     return <option value={curr}>curr</option>;
  //   }
  // });
  return (
    <React.Fragment>
      <option value='USD'>USD</option>
      <option value='BTC'>BTC</option>
    </React.Fragment>
  );
};

export default dropdown;
