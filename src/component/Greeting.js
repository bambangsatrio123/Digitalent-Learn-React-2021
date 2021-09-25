import React from "react";
import useSetLocalStorage from "../hooks/useSetLocalStorage";

export default function Greeting({ initialName = "Intial Name" }) {
  const [name, setName] = useSetLocalStorage("barang", initialName);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}
