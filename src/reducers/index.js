import { de } from "date-fns/esm/locale";
import { firestore } from "../firebaseConfig/firebase";

const initialState = {
  wallets: [],
  selectedWallet: null,
  selectedWalletId: 1,
  documentsWalletsId: [],
};
const deleteTransaction = (transactions, id) => {
  const tempTransctions = transactions.filter(
    (transaction) => transaction.id !== id,
  );

  return tempTransctions;
};
const uid = localStorage.getItem("currentUser");
let walletsColletions = [];

const walletierReducer = (state = initialState, action) => {
  const { payload, type } = action;
  const changeWalletBalnace = (wallet, amount, type) => {
    if (type === "add") {
      wallet.balance += parseFloat(amount);
    } else wallet.balance -= parseFloat(amount);

    return wallet;
  };
  switch (type) {
    case "ADD_WALLET": {
      const wallets = [...state.wallets, payload];
      console.log(wallets);

      return {
        ...state,
        wallets: [...state.wallets, payload],
        selectedWalletId: payload.id,
      };
    }

    case "DELETE_WALLET": {
      firestore
        .collection("wallet")
        .doc(state.documentsWalletsId[payload])
        .delete();
      return {
        ...state,
        wallets: state.wallets.filter((wallet, index) => index !== payload),
      };
    }

    case "SELECT_WALLET": {
      console.log(payload);
      console.log(state.documentsWalletsId);
      return {
        ...state,
        selectedWalletId: state.documentsWalletsId[payload],
        selectedWallet: state.wallets[payload],
      };
    }
    case "ADD_INCOME": {
      const selectedWallet = state.selectedWallet;
      changeWalletBalnace(selectedWallet, payload.amount, "add");
      let total = 0;
      const summedUpCategory = selectedWallet.incomesSummedUpByCategory.find(
        (income) => income.category === payload.category,
      );
      if (summedUpCategory) {
        summedUpCategory.amount += payload.amount;
      } else {
        selectedWallet.incomesSummedUpByCategory = [
          ...selectedWallet.incomesSummedUpByCategory,
          { category: payload.category, amount: payload.amount },
        ];
      }

      selectedWallet.incomes = [...selectedWallet.incomes, payload];
      selectedWallet.incomes.map((income) => {
        total += income.amount;
      });
      selectedWallet.incomesTotal = total;
      firestore.collection("wallet").doc(state.selectedWalletId).update({
        incomes: selectedWallet.incomes,
      });

      return {
        ...state,
        wallets: state.wallets.map((wallet) => {
          if (wallet.id === state.selectedWalletId) {
            return selectedWallet;
          }
          return wallet;
        }),
      };
    }
    case "ADD_OUTCOME": {
      const selectedWallet = state.selectedWallet;
      let total = 0;
      changeWalletBalnace(selectedWallet, payload.amount, "subtract");
      selectedWallet.outcomes = [...selectedWallet.outcomes, payload];
      selectedWallet.outcomes.map((outcome) => {
        total += outcome.amount;
      });
      selectedWallet.outcomesTotal = total;
      const summedUpCategory = selectedWallet.outcomesSummedUpByCategory.find(
        (income) => income.category === payload.category,
      );
      if (summedUpCategory) {
        summedUpCategory.amount += payload.amount;
      } else {
        selectedWallet.outcomesSummedUpByCategory = [
          ...selectedWallet.outcomesSummedUpByCategory,
          { category: payload.category, amount: payload.amount },
        ];
      }
      console.log(selectedWallet);
      localStorage.setItem("wallets", JSON.stringify(state.wallets));
      return {
        ...state,
        wallets: state.wallets.map((wallet) => {
          if (wallet.id === selectedWallet.id) {
            return selectedWallet;
          }
          return wallet;
        }),
      };
    }

    case "ADD_INCOMES_CATEGORY": {
      const selectedWallet = state.selectedWallet;
      if (
        !selectedWallet.incomesCategories.find(
          (category) => category === payload,
        )
      ) {
        selectedWallet.incomesCategories = [
          ...selectedWallet.incomesCategories,
          payload,
        ];
      }
      return {
        ...state,
        wallets: state.wallets.map((wallet) => {
          if (wallet.id === selectedWallet.id) {
            return selectedWallet;
          }
          return wallet;
        }),
      };
    }

    case "ADD_OUTCOMES_CATEGORY": {
      const selectedWallet = state.selectedWallet;
      if (
        !selectedWallet.outcomesCategories.find(
          (category) => category === payload,
        )
      ) {
        selectedWallet.outcomesCategories = [
          ...selectedWallet.outcomesCategories,
          payload,
        ];
      }
      return {
        ...state,
        wallets: state.wallets.map((wallet) => {
          if (wallet.id === selectedWallet.id) {
            return selectedWallet;
          }
          return wallet;
        }),
      };
    }
    case "GET_WALLETS_FROM_FIREBASE": {
      return {
        ...state,
        wallets: [...payload],
      };
    }
    case "GET_DOCUMENTS_ID_FROM_FIREBASE": {
      return {
        ...state,
        documentsWalletsId: payload,
      };
    }
    case "DELETE_TRANSACTION": {
      const selectedWallet = state.selectedWallet;
      if (payload.type === "income") {
        selectedWallet.incomes = deleteTransaction(
          selectedWallet.incomes,
          payload.id,
        );

        firestore.collection("wallet").doc(state.selectedWalletId).update({
          incomes: selectedWallet.incomes,
        });
      } else {
        selectedWallet.outcomes = deleteTransaction(
          selectedWallet.outcomes,
          payload.id,
        );
        firestore.collection("wallet").doc(state.selectedWalletId).update({
          outcomes: selectedWallet.outcomes,
        });
      }
      return {
        ...state,
        wallets: state.wallets.map((wallet) => {
          if (wallet.id === selectedWallet.id) {
            return selectedWallet;
          }
          return wallet;
        }),
      };
    }

    default:
      return state;
  }
};

export default walletierReducer;
