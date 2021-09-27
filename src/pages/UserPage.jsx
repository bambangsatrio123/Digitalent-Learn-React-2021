import { Link, Route, useHistory, useParams, Switch } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function UserPage() {
  const history = useHistory();
  let { id } = useParams();
  const [, setUser, logout] = useUser(); 

  return (
    <div className="App">
      <h1>User Page</h1>
      {id}
      <button onClick={() => history.push("/")}> Ke Home Pag e</button>
      <Link to="user/test">
        <button>Test</button>
      </Link>
      <button 
      onClick={() => {
        logout(); 
        history.replace("/");
      }}>Logout</button>
      <Switch>
        <Route path="/user/test" exact>
          <div> Test Inside user</div>
        </Route>
      </Switch>
    </div>
  );
}
