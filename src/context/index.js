import { createContext, useReducer } from "react";

const initinalValue = {
  toggle: true,
  toggleNavbar: true,
};

export const Context = createContext();

const reducer = (state = initinalValue, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_TOGGLE":
      return { ...state, toggle: payload };

    case "SET_TOGGLE_NAVBAR":
      return { ...state, toggleNavbar: payload };

    default:
      return { state };
  }
};
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initinalValue);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
