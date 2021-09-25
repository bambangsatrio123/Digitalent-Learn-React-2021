import { UserPage, AboutPage, HomePage, LoginPage } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import useUser from "./hooks/useUser";

export default function Router() {
  const [user] = useUser();
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <PrivateRoute allowed={user.isLogged} path="/user" redirect="/login">
          <UserPage />
        </PrivateRoute>
        <PrivateRoute allowed={user.isLogged} path="/user/:id">
          <UserPage />
        </PrivateRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="*">Not Found</Route>
      </Switch>
    </BrowserRouter>
  );
}
