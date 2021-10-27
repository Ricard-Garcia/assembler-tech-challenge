import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import PublicRoute from "../PublicRoute";
import PrivateRoute from "../PrivateRoute";

import SignIn from "../../../pages/SignIn";
import SignUp from "../../../pages/SignUp";
import Upload from "../../../pages/Upload";
import SingleMeme from "../../../pages/SingleMeme";
import Search from "../../../pages/Search";
import Category from "../../../pages/Category";
import Home from "../../../pages/Home";

import { PAGES } from "../../../constants/routes";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Public routes */}
        <PublicRoute path={PAGES.SIGN_IN} exact>
          <SignIn />
        </PublicRoute>
        <PublicRoute path={PAGES.SIGN_UP} exact>
          <SignUp />
        </PublicRoute>
        {/* Private routes */}
        <PrivateRoute path={`${PAGES.CATEGORY}/:tag`} exact>
          <Category />
        </PrivateRoute>
        <PrivateRoute path={PAGES.SEARCH} exact>
          <Search />
        </PrivateRoute>
        <PrivateRoute path={PAGES.UPLOAD} exact>
          <Upload />
        </PrivateRoute>
        <PrivateRoute path={`${PAGES.SINGLE_MEME}/:id`} exact>
          <SingleMeme />
        </PrivateRoute>
        <PrivateRoute path={PAGES.HOME} exact>
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}
