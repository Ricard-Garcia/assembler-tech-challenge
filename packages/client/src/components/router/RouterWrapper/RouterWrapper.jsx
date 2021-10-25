import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import PublicRoute from "../PublicRoute";
import PrivateRoute from "../PrivateRoute";

import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import Home from "../../pages/Home";

import { PAGES } from "../../../constants/routes";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Public routes */}
        <PublicRoute path={PAGES.SIGN_IN} exact>
          <SignIn />
        </PublicRoute>
        {/* Private routes */}
        <PrivateRoute path={PAGES.SIGN_UP} exact>
          <SignUp />
        </PrivateRoute>
        <PrivateRoute path={PAGES.HOME} exact>
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}
