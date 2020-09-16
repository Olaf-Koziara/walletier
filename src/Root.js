import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainTemplate from "./templates/MainTemplate";
import Home from "./views/Home";
const Root = () => {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
};

export default Root;
