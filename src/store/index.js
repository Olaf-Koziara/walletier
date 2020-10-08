import { createStore } from "redux";
import walletierReducer from "../reducers";

const store = createStore(
  walletierReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
