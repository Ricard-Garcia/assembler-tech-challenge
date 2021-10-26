import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { PAGES } from "../../../constants/routes";

export default function PrivateRoute({ children, ...props }) {
  const userState = useSelector((state) => state.user);
  const location = useLocation();

  return (
    <Route {...props}>
      {/* Redirect to sign in if user is not logged */}
      {userState.isLogged ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: PAGES.SIGN_IN,
            // In case user goes back
            state: { referrer: location.pathname },
          }}
        />
      )}
    </Route>
  );
}
