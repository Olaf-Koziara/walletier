import React, { useState } from "react";
import { connect } from "react-redux";
import AddTransactionForm from "../components/forms/AddTransactionForm";
import {
  StyledAnimatedButton,
  StyledCategoriesButtonWrapper,
  StyledCheckBoxLabel,
  StyledFormWrapper,
  StyledImage,
  StyledTransactionButtonsWrapper,
  StyledTransactionsListWrapper,
  StyledTransactionsWrapper,
  StyledTransparentButton,
} from "../components/styled";
import TransactionsList from "../components/transactions/TransactionsList";

const Transactions = ({ wallets, selectedId, selectedWallet }) => {
  const [activeTransaction, setActiveTransaction] = useState();
  return selectedWallet ? (
    <StyledTransactionsWrapper>
      <StyledTransactionsListWrapper>
        <TransactionsList
          transactions={selectedWallet.incomes}
          currency={selectedWallet.currency}
          categories={selectedWallet.incomesCategories}
          transactionType={"income"}
        />
      </StyledTransactionsListWrapper>
      {activeTransaction ? (
        <StyledFormWrapper>
          {" "}
          <AddTransactionForm
            closeForm={() => setActiveTransaction(null)}
            transactionType={activeTransaction}
          />
        </StyledFormWrapper>
      ) : (
        <StyledTransactionButtonsWrapper>
          <StyledAnimatedButton
            income
            onClick={() => setActiveTransaction("incomes")}
          >
            Add income
          </StyledAnimatedButton>
          <StyledAnimatedButton
            outcome
            onClick={() => setActiveTransaction("outcomes")}
          >
            Add outcome
          </StyledAnimatedButton>
        </StyledTransactionButtonsWrapper>
      )}

      <StyledTransactionsListWrapper>
        <TransactionsList
          transactions={selectedWallet.outcomes}
          currency={selectedWallet.currency}
          categories={selectedWallet.outcomesCategories}
          transactionType={"outcome"}
        />
      </StyledTransactionsListWrapper>
    </StyledTransactionsWrapper>
  ) : null;
};
const mapStateToProps = (state) => ({
  wallets: state.wallets,
  selectedWallet: state.selectedWallet,
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
