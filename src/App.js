import logo from "./logo.svg";
import "./App.css";
import { axiosInstace } from "./shared/AxiosInstace";
import { useEffect } from "react/cjs/react.development";

function App() {
  useEffect(() => {
    const getTrendingGifs = async () => {
      const { data } = await axiosInstace.get("/random", {
        params: { limit: 10}
      });
      console.log(data)
    };    
    getTrendingGifs();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
