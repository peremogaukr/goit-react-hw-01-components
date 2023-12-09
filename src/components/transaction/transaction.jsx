import PropTypes from 'prop-types';
import css from './Styles-Transaction.module.css';

export const TransactionHistoryUser = ({ items }) => {
  return (
    <table className={css.transactionHistoryUser}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistoryUser.propTypes = {
  items: PropTypes.array.isRequired,
};