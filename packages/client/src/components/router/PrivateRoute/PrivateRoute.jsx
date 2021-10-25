import React from "react";
import { Route } from "react-router-dom";

export default function PrivateRoute({ children, ...props }) {
  return <Route {...props}>{children}</Route>;
}
