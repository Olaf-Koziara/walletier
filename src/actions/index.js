export const addWallet = (newWallet) => {
  return {
    type: "ADD_WALLET",
    payload: newWallet,
  };
};
export const deleteWallet = (walletName) => {
  return {
    type: "DELETE_WALLET",
    payload: walletName,
  };
};
export const selectWallet = (id) => {
  return {
    type: "SELECT_WALLET",
    payload: id,
  };
};
export const addIncome = (category, amount, date) => {
  const id = Math.floor(Math.random() * 10000);

  return {
    type: "ADD_INCOME",
    payload: { category, amount, id, date },
  };
};
export const addOutcome = (category, amount, date) => {
  const id = Math.floor(Math.random() * 10000);
  return {
    type: "ADD_OUTCOME",
    payload: { category, amount, id, date },
  };
};
export const addIncomesCategory = (category) => ({
  type: "ADD_INCOMES_CATEGORY",
  payload: category,
});
export const addOutcomesCategory = (category) => ({
  type: "ADD_OUTCOMES_CATEGORY",
  payload: category,
});
export const deleteOutcome = (id) => ({
  type: "DELETE_OUTCOME",
  payload: id,
});
export const getWalletsFromFirebase = (wallets) => ({
  type: "GET_WALLETS_FROM_FIREBASE",
  payload: wallets,
});
