import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function HomePage() {
  const [user] = useUser();
  return (
    <div className="App">
      <h1>Halaman Utama</h1>
      <h4>Halo {user.name}</h4>
      {user.isLogged ? (
        <p>
          Menuju Halaman User{" "}
          <Link to="/user">
            <button>Disini</button>
          </Link>
        </p>
      ) : (
        <p>
          Silahkan Login{" "}
          <Link to="/login">
            <button>Disini</button>
          </Link>
        </p>
      )}
    </div>
  );
}
