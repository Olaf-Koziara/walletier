import React from "react";
import Navbar from "../components/navigation/Navbar";
import { Switch, Route } from "react-router-dom";
import RegisterPage from "../views/RegisterPage";
import LoginPage from "../views/LoginPage";
import {
  StyledUnloggedLogoWrapper,
  StyledUnloggedUserWrapper,
} from "../components/styled";
import logo from "../assets/unloggedLogo.png";
const UnloggedUser = ({ children, walletsCollection }) => {
  return (
    <StyledUnloggedUserWrapper>
      <StyledUnloggedLogoWrapper>
        <img src={logo} style={{ width: "100%" }} />
      </StyledUnloggedLogoWrapper>
      <Switch>
        {/* <Navbar /> */}
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/register" component={RegisterPage} />
        {/* {children} */}
      </Switch>
    </StyledUnloggedUserWrapper>
  );
};

export default UnloggedUser;
