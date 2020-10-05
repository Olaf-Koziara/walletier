import { Formik } from "formik";
import React, { useState } from "react";
import { connect } from "react-redux";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  addIncome as addIncomeAction,
  addOutcome as addOutcomeAction,
  addIncomesCategory as addIncomesCategoryAction,
  addOutcomesCategory as addOutcomesCategoryAction,
} from "../../actions";
import { StyledAnimatedButton, StyledField, StyledForm } from "../styled";

const AddTransactionForm = ({
  addIncome,
  addOutcome,
  addIncomesCategory,
  addOutcomesCategory,
  transactionType,
  selectedWallet,
  closeForm,
}) => {
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [CategoryInputValue, setCategoryInputValue] = useState();
  const [newCategoryInputValue, setNewCategoryInputValue] = useState();
  const [date, setDate] = useState(new Date());
  console.log(date);
  const addTransactionToWallet = (e) => {
    e.preventDefault();
    closeForm();

    const category = e.target.category.value;
    const amount = parseFloat(e.target.amount.value);

    if (transactionType === "incomes") {
      addIncome(category, amount, date.toString());
    } else if (transactionType === "outcomes") {
      addOutcome(category, amount, date.toString());
    }
    e.target.reset();
  };
  const addCategoryOnCLick = (e) => {
    e.preventDefault();
    setCategoryInputValue(newCategoryInputValue);
    setIsAddingCategory(false);
    if (transactionType === "incomes") {
      addIncomesCategory(newCategoryInputValue);
    } else {
      addOutcomesCategory(newCategoryInputValue);
    }
    setNewCategoryInputValue("");
    console.log(selectedWallet);
  };

  return (
    <Formik initialValues={{ category: "", amount: "" }}>
      <StyledForm onSubmit={addTransactionToWallet}>
        <StyledField
          id="category"
          name="category"
          as="select"
          placeholder="category"
          value={CategoryInputValue}
          onChange={(e) => setCategoryInputValue(e.target.value)}
        >
          {selectedWallet
            ? transactionType === "incomes"
              ? selectedWallet.incomesCategories.map((category) => (
                  <option>{category}</option>
                ))
              : selectedWallet.outcomesCategories.map((category) => (
                  <option>{category}</option>
                ))
            : null}
        </StyledField>
        {!isAddingCategory ? (
          <StyledAnimatedButton onClick={() => setIsAddingCategory(true)}>
            add category
          </StyledAnimatedButton>
        ) : (
          <>
            <StyledField
              onChange={(e) => setNewCategoryInputValue(e.target.value)}
              value={newCategoryInputValue}
              name="newCategory"
              placeholder="category"
            />
            <StyledAnimatedButton onClick={(e) => addCategoryOnCLick(e)}>
              add Category
            </StyledAnimatedButton>
          </>
        )}

        <StyledField name="amount" placeholder="amount" required />
        <StyledAnimatedButton type="submit">Add</StyledAnimatedButton>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={date}
              onChange={(date) => setDate(date)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />

            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Time picker"
              ampm={false}
              value={date}
              onChange={(date) => setDate(date)}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </StyledForm>
    </Formik>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addIncome: (category, amount, date) =>
    dispatch(addIncomeAction(category, amount, date)),
  addOutcome: (category, amount, date, time) =>
    dispatch(addOutcomeAction(category, amount, date, time)),
  addIncomesCategory: (category) =>
    dispatch(addIncomesCategoryAction(category)),
  addOutcomesCategory: (category) =>
    dispatch(addOutcomesCategoryAction(category)),
});
const mapStateToProps = (state) => ({
  selectedWallet: state.selectedWallet,
});
export default connect(mapStateToProps, mapDispatchToProps)(AddTransactionForm);
