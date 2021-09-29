import React from "react";

export default function useSetLocalStorage(key, intitalValue) {
  const [state, setState] = React.useState(() => window.localStorage.getItem(key) || intitalValue);

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
 