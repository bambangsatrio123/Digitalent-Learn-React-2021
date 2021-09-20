// import "./App.css";

import Pesan from "./component/Pesan";

function App() {
  return (
    <>
      <Pesan className="pertama" ucapan="halo" name="dandi" style={{ backgroundColor: "blue" }} size="small" />
      <Pesan className="pertama" ucapan="halo" name="satrio" style={{ backgroundColor: "red" }} size="large" />
      <Pesan className="pertama" ucapan="halo" name="Tifa" style={{ backgroundColor: "pink" }} size="medium" />
    </>
  );
}

export default App;
