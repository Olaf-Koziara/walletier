import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../views/Home";
import Navbar from "../components/navigation/Navbar";
import Transactions from "../views/Transactions";
import Button from "../components/atoms/Button";
import { auth } from "../firebaseConfig/firebase";
const LoggedUser = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/transactions" component={Transactions} />
        
      </Switch>
    </>
  );
};

export default LoggedUser;
