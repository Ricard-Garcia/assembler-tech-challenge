import React from "react";
import { Route } from "react-router-dom";

export default function PublicRoute({ children, ...props }) {
  return <Route {...props}>{children}</Route>;
}
