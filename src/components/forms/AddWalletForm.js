import React from "react";
import { Formik } from "formik";
import { StyledField, StyledForm, StyledLabel } from "../styled";
import deleteIcon from "../../assets/icons/001-remove.png";
import Button from "../atoms/Button";
import {
  addWallet as addWalletAction,
  selectWallet as selectWalletAction,
} from "../../actions";
import { connect } from "react-redux";
import CurrencySelect from "./CurrencySelect";
import { firestore } from "../../firebaseConfig/firebase";

const AddWalletForm = ({ closeModal, addWallet, selectWallet, wallets }) => {
  const handelWalletAdd = (event) => {
    event.preventDefault();
    closeModal();
    const tempDate = new Date();
    const id = Math.floor(Math.random() * 1000);
    const tempWallet = {
      walletName: event.target.name.value,
      balance: parseFloat(event.target.balance.value),
      date: tempDate.toLocaleDateString(),
      currency: event.target.currency.value,
      id: id,
      docId: "",
      incomes: [],
      outcomes: [],
      incomesTotal: 0,
      outcomesTotal: 0,
      incomesCategories: [],
      outcomesCategories: [],
      outcomesSummedUpByCategory: [],
      incomesSummedUpByCategory: [],
      uid: localStorage.getItem("currentUser"),
    };
    addWallet(tempWallet);
    firestore
      .collection("wallet")
      .add(tempWallet)
      .then((docRef) => {
        console.log(docRef.id);
        firestore
          .collection("wallet")
          .doc(docRef.id)
          .update({ docId: docRef.id });
      })
      .then(() => {
        selectWallet(0);
      });
  };
  return (
    <Formik initialValues={{ name: "", balance: 0, currency: "" }}>
      <StyledForm onSubmit={handelWalletAdd}>
        <Button onClick={closeModal} transparent>
          <img width="25px" src={deleteIcon} alt="close" />
        </Button>
        <StyledLabel htmlFor="name">Wallet name</StyledLabel>
        <StyledField id="name" name="name" type="text" />
        <StyledLabel htmlFor="balance">Wallet balance</StyledLabel>
        <StyledField id="balance" name="balance" type="number" />
        <StyledLabel htmlFor="currency">Currency</StyledLabel>
        <CurrencySelect />
        <Button
          style={{
            width: "100px",
            height: "40px",
            margin: "auto",
            marginTop: "10px",
          }}
          type="submit"
          red
        >
          ADD
        </Button>
      </StyledForm>
    </Formik>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addWallet: (newWallet) => dispatch(addWalletAction(newWallet)),
  selectWallet: (id) => dispatch(selectWalletAction(id)),
});
const mapStateToProps = (state) => ({ wallets: state.wallets });
export default connect(mapStateToProps, mapDispatchToProps)(AddWalletForm);
