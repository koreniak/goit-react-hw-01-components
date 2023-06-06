import PropTypes from 'prop-types';
import { TransactionsTable, TransactionsTableHead, TransactionsItems, TransactionsHeadsItems, TransactionsBodyItems } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  const transactions = items.map(({ id, type, amount, currency }) =>
    <TransactionsItems key={id}>
      <TransactionsBodyItems>{type}</TransactionsBodyItems>
      <TransactionsBodyItems>{amount}</TransactionsBodyItems>
      <TransactionsBodyItems>{currency}</TransactionsBodyItems>
    </TransactionsItems>);

  return (
    <TransactionsTable>
      <thead>
        <TransactionsTableHead>
          <TransactionsHeadsItems>Type</TransactionsHeadsItems>
          <TransactionsHeadsItems>Amount</TransactionsHeadsItems>
          <TransactionsHeadsItems>Currency</TransactionsHeadsItems>
        </TransactionsTableHead>
      </thead>

      <tbody>
        {transactions}
      </tbody>
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
  })),
};