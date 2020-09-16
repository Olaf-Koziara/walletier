import React from "react";
import styled from "styled-components";
import walletImage from "../assets/wallet-3912327_640.jpg";
const StyledWalletWrapper = styled.div`
  display: flex;
  margin: 10px 0;
  padding: 5px;
  background-color: white;
  width: 100%;
  box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.75);
`;
const StyledWalletTextWrapper = styled.div``;
const WalletListItem = () => {
  return (
    <StyledWalletWrapper>
      <img src={walletImage} width="80px" alt="wallet" />
      <StyledWalletTextWrapper>
        <p>Name</p>
        <p>Date</p>
        <p>Balance</p>
      </StyledWalletTextWrapper>
    </StyledWalletWrapper>
  );
};

export default WalletListItem;
