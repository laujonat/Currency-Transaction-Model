export default function(transaction) {
  return(
    <p>{transaction.from} sent {transaction.to} {transaction.amount}.</p>
  );
}
