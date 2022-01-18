// Необходимо создать компонент <TransactionHistory>
// принимающий один проп items - массив объектов транзакций
//  из transactions.json.Компонент создает разметку таблицы.
// Каждая транзакция это строка таблицы.В примере приведена
// разметка двух транзакций.
import PropTypes from "prop-types";
import TransactionsItem from "../Transactions/TransactionsItem";
import { TransactionHistor, Thead, Ttype } from "./Transaction.styled";

function TransactionHistory({ items }) {
  return (
    <TransactionHistor className="transaction-history">
      <Thead>
        <tr>
          <Ttype>Type</Ttype>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionsItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </TransactionHistor>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
