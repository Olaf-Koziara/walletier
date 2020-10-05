import React, { createRef, useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import LoggedUser from "./templates/LoggedUser";
import UnloggedUser from "./templates/UnloggedUser";
import Home from "./views/Home";

import { auth, firestore } from "./firebaseConfig/firebase";
import Loop from "./components/Loop";
import { getWalletsFromFirebase as getWalletsFromFirebaseAction } from "./actions";
import { connect } from "react-redux";

const Root = ({ getWalletsFromFirebase, wallets }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const walletsColletions = firestore.collection("wallet");
  const documentsColletions = (doc) => ({
    id: doc.id,
    ...doc.data(),
  });
  useEffect(() => {
    const subscribe = walletsColletions.onSnapshot((snapshot) => {
      const dataFromWalletsCollection = snapshot.docs.map(documentsColletions);
      console.log(dataFromWalletsCollection);
      getWalletsFromFirebase(dataFromWalletsCollection);
    });
    return () => subscribe;
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem("currentUser", user.uid);
      } else {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
      }
    });
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
});
const mapStateToProps = (state) => ({
  wallets: state.wallets,
});
export default connect(mapStateToProps, mapDispatchToProps)(Root);
