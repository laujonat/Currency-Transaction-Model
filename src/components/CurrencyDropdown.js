import React from 'react';

const dropdown = function(currencies) {
  // return currencies.map((curr) => {
  //   return <option value={`${curr}`}>curr</option>;
  // });

  return (
    <React.Fragment>
      <option value='USD'>USD</option>
      <option value='BTC'>BTC</option>
    </React.Fragment>
  );
};

export default dropdown;
