import * as React from "react";
import Counter from "./component/counter";
import CountDisplay from "./component/counterDisplay";
import CountProvider from "./context/countContext";

function App() {
  return (
    <>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </>
  );
}

export default App;
