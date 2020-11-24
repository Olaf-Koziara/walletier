import firebase from "firebase/app";
import "firebase/auth/";

import "firebase/firestore/";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "walletier.firebaseapp.com",
  databaseURL: "https://walletier.firebaseio.com",
  projectId: "walletier",
  storageBucket: "walletier.appspot.com",
  messagingSenderId: "284982362509",
  appId: process.env.REACT_APP_FIREBASE_APPID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
