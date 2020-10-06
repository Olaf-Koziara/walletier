import React from "react";
import { connect } from "react-redux";
import { deleteTransaction as deleteTransactionAction } from "../../actions";
import Button from "../atoms/Button";
import { StyledListItemTextWrapper, StyledTransparentButton } from "../styled";

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
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <StyledListItemTextWrapper>
          Category:{category}
        </StyledListItemTextWrapper>
        <StyledListItemTextWrapper>
          {" "}
          Amount:{amount + " " + currency}
        </StyledListItemTextWrapper>
        <StyledListItemTextWrapper>{dateString}</StyledListItemTextWrapper>
      </div>
      <StyledTransparentButton
        onClick={() => deleteTransaction(id, transactionType)}
        width={10}
        textLight
      >
        X
      </StyledTransparentButton>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deleteTransaction: (id, type) => dispatch(deleteTransactionAction(id, type)),
});
export default connect(null, mapDispatchToProps)(TransactionListItem);
