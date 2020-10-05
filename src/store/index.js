import { createStore } from "redux";
import walletierReducer from "../reducers";

const store = createStore(walletierReducer);

export default store;
