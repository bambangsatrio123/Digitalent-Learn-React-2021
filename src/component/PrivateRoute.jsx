import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({children, allowed, ...rest}) {
  return <Route {...rest} render={() => (allowed ? children : <Redirect to='/login' />)} />;
}
