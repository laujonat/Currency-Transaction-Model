import React from 'react';

export default function({ transaction, idx }) {
  console.log(transaction, idx);
  return(
    <li key={idx} >
      {transaction.from} sent {transaction.to} {transaction.amount}.
    </li>
  );
}
