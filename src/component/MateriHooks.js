import React, { useState } from "react";
import Greeting from "./Greeting";

export default function MateriHooks() {
  const [count, setCounter] = React.useState(0);
  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>{count}</button>
      <Greeting />
    </>
  );
}
