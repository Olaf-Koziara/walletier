import React from "react";
import Button from "../atoms/Button";
import { StyledListItemTextWrapper, StyledTransparentButton } from "../styled";

const TransactionListItem = ({ category, amount, id, currency, date = "" }) => {
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
      <StyledTransparentButton width={10} textLight>
        X
      </StyledTransparentButton>
    </>
  );
};

export default TransactionListItem;
