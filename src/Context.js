import { createContext } from "react";

export const Context = createContext({});

export const Provider = (props) => {
  const { children } = props;
  const obj = { value: "test" };

  return <Context.Provider value={obj}>{children}</Context.Provider>;
};
