import { Link, Route, useHistory, useParams, Switch } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function UserPage() {
  const history = useHistory();
  let { id } = useParams();
  const [user, setUser] = useUser();

  function logout() {
    setUser({ name: "guest", isLogged: false });
    history.replace("/");
  }

  return (
    <div className="App">
      <h1>User Page</h1>
      {id}
      <button onClick={() => history.push("/")}> Ke Home Page</button>
      <Link to="user/test">
        <button>Test</button>
      </Link>
      <button onClick={logout}>Logout</button>
      <Switch>
        <Route path="/user/test" exact>
          <div> Test Inside user</div>
        </Route>
      </Switch>
    </div>
  );
}
