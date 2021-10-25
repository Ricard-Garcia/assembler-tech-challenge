import React from "react";
import { Route } from "react-router-dom";

export default function PublicRoute({ children, ...rest }) {
  return <Route {...rest}>{children}</Route>;
}
