import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, allowed, redirect, ...rest }) {
  return <Route {...rest} render={() => (allowed ? children : <Redirect to={redirect} />)} />;
}
