import PropTypes from "prop-types";
import { BodyItem, Amount } from "./Transaction.styled";

export default function TransactionsItem({ type, amount, currency }) {
  return (
    <BodyItem>
      <td>{type}</td>
      <Amount>{amount}</Amount>
      <td>{currency}</td>
    </BodyItem>
  );
}

TransactionsItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  nacurrencyme: PropTypes.string,
};
