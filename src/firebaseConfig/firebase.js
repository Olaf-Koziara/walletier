import firebase from "firebase/app";
import "firebase/auth/";

import "firebase/firestore/";
const firebaseConfig = {
  apiKey: "AIzaSyB39ykFlA7NZFN-wAU51d5G7mCq2c0mwYQ",
  authDomain: "walletier.firebaseapp.com",
  databaseURL: "https://walletier.firebaseio.com",
  projectId: "walletier",
  storageBucket: "walletier.appspot.com",
  messagingSenderId: "284982362509",
  appId: "1:284982362509:web:6d8f1a43c9086586edbdc4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
