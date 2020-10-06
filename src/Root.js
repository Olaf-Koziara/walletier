import React, { createRef, useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import LoggedUser from "./templates/LoggedUser";
import UnloggedUser from "./templates/UnloggedUser";
import Home from "./views/Home";

import { auth, firestore } from "./firebaseConfig/firebase";
import Loop from "./components/Loop";
import {
  getWalletsFromFirebase as getWalletsFromFirebaseAction,
  getDocumentsIdFromFirebase as getDocumentsIdFromFirebaseAction,
} from "./actions";
import { connect } from "react-redux";

const Root = ({ getWalletsFromFirebase, getDocumentsIdFromFirebase }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [wallets, setWallets] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
        setWallets(firestore.collection("wallet").where("uid", "==", user.uid));
        setCurrentUser(user.uid);
        localStorage.setItem("currentUser", user.uid);
      } else {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
      }
    });
  }, [currentUser]);

  // useEffect(() => {
  //   walletsColletions.doc("OGag2j6PXqfmHMBFt60B").update({
  //     balance: ,
  //   });
  //   console.log(walletsColletions);
  // }, []);

  const documentsColletions = (doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  };
  const getIdFromDocumentsCollection = (doc) => doc.id;

  useEffect(() => {
    if (wallets) {
      const subscribe = wallets.onSnapshot((snapshot) => {
        const dataFromWalletsCollection = snapshot.docs.map(
          documentsColletions,
        );
        const idsFromWalletsCollection = snapshot.docs.map(
          getIdFromDocumentsCollection,
        );

        getDocumentsIdFromFirebase(idsFromWalletsCollection);
        getWalletsFromFirebase(dataFromWalletsCollection);
      });
      return () => subscribe;
    }
  }, [currentUser]);

  return (
    <BrowserRouter>
      {currentUser ? <LoggedUser /> : <UnloggedUser />}
    </BrowserRouter>
  );
};
const mapDispatchToProps = (dispatch) => ({
  getWalletsFromFirebase: (wallets) =>
    dispatch(getWalletsFromFirebaseAction(wallets)),
  getDocumentsIdFromFirebase: (documentsIdArray) =>
    dispatch(getDocumentsIdFromFirebaseAction(documentsIdArray)),
});
const mapStateToProps = (state) => ({
  wallets: state.wallets,
});
export default connect(mapStateToProps, mapDispatchToProps)(Root);
