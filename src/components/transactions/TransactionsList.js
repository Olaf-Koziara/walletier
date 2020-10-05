import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import AddTransactionForm from "../forms/AddTransactionForm";
import {
  StyledCategoriesButtonWrapper,
  StyledCategoriesMenuWrapper,
  StyledImage,
  StyledTransactionsList,
  StyledTransactionsListItem,
  StyledTransparentButton,
} from "../styled";
import "../../animations/cssTransitionClasses.css";
import TransactionListItem from "./TransactionListItem";
import FilterMenu from "./FilterMenu";

const TransactionsList = ({
  transactions,
  transactionType,
  currency,
  categories,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minDate, setMinDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);
  return (
    <>
      <FilterMenu
        isCategoriesOpen={isCategoriesOpen}
        toggleCategoriesMenu={() => setIsCategoriesOpen(!isCategoriesOpen)}
        minDate={minDate}
        setMinDate={setMinDate}
        maxDate={maxDate}
        setMaxDate={setMaxDate}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
      <StyledTransactionsList>
        {transactions.map((transaction, index) =>
          (transaction.category === selectedCategory ||
            selectedCategory === "all") &&
          (!maxDate || new Date(transaction.date) <= maxDate) &&
          (!minDate || new Date(transaction.date) >= minDate) ? (
            <CSSTransition
              in={true}
              timeout={!isNew ? index * 80 : 0}
              classNames="fade"
              key={index}
              appear
              mountOnEnter={true}
              unmountOnExit={true}
            >
              <StyledTransactionsListItem>
                <TransactionListItem {...transaction} currency={currency} />
              </StyledTransactionsListItem>
            </CSSTransition>
          ) : null,
        )}
      </StyledTransactionsList>
    </>
  );
};

export default TransactionsList;
