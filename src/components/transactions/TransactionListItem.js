import React from "react";
import { connect } from "react-redux";
import { deleteTransaction as deleteTransactionAction } from "../../actions";
import Button from "../atoms/Button";
import {
  StyledListItemTextWrapper,
  StyledTransactionsListItem,
  StyledTransparentButton,
} from "../styled";

const TransactionListItem = ({
  category,
  amount,
  id,
  currency,
  date = "",
  deleteTransaction,
  transactionType,
}) => {
  const dateString = date.toString().split(" ").slice(0, 5).join(" ");
  return (
    <StyledTransactionsListItem>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <StyledListItemTextWrapper>
          {`${category} ${amount} ${currency}`}
        </StyledListItemTextWrapper>
        <StyledListItemTextWrapper>{dateString}</StyledListItemTextWrapper>
      </div>
      <button
        onClick={() => deleteTransaction(id, transactionType)}
        className="text-white"
      >
        X
      </button>
    </StyledTransactionsListItem>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deleteTransaction: (id, type) => dispatch(deleteTransactionAction(id, type)),
});
export default connect(null, mapDispatchToProps)(TransactionListItem);
