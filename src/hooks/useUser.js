import React from "react";
import { UserContext } from "../context/UserContext";

export default function useUser() {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useCount must be inside of myContext Provider");
  }
  return context;
}
