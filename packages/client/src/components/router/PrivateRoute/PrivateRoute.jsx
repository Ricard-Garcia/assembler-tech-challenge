import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { PAGES } from "../../../constants/routes";

export default function PrivateRoute({ children, ...props }) {
  return <Route {...props}>{children}</Route>;
}
