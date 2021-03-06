import React from "react";
import styled from "styled-components";
import walletImage from "../../assets/walletListItemIcon.png";
import { connect } from "react-redux";
import {
  deleteWallet as deleteWalletAction,
  selectWallet as selectWalletAction,
} from "../../actions";
import deleteIcon from "../../assets/icons/001-remove.png";
import Button from "../atoms/Button";
import { StyledWalletWrapper } from "../styled";

const StyledWalletTextWrapper = styled.div``;
const WalletListItem = ({
  walletName,
  balance,
  date,
  deleteWallet,
  id,
  selectWallet,
  selectedId,
  index,
}) => {
  return (
    <StyledWalletWrapper
      clicked={selectedId === id}
      onClick={() => selectWallet(index)}
    >
      <img src={walletImage} width="80px" alt="wallet" />
      <StyledWalletTextWrapper>
        <p>{walletName}</p>
        <p>{date}</p>
        <p>{balance}</p>
      </StyledWalletTextWrapper>

      <Button transparent onClick={() => deleteWallet(index)}>
        <img style={{ width: "30px" }} src={deleteIcon} alt="delete" />
      </Button>
    </StyledWalletWrapper>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deleteWallet: (index) => dispatch(deleteWalletAction(index)),
  selectWallet: (index) => dispatch(selectWalletAction(index)),
});
const mapStateToProps = (state) => ({
  selectedId: state.selectedWalletId,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletListItem);
