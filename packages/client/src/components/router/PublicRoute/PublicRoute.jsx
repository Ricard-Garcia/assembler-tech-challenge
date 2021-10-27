import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { PAGES } from "../../../constants/routes";

export default function PublicRoute({ children, ...props }) {
  const userState = useSelector((state) => state.user);

  const history = useHistory();

  const urlDestination = history.location.state
    ? history.location.state.referrer
    : PAGES.HOME;

  return (
    <Route {...props}>
      {!userState.isLogged ? children : <Redirect to={urlDestination} />}
    </Route>
  );
}
