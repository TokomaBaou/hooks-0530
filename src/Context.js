import { createContext, useState } from "react";

export const Context = createContext({});

export const Provider = (props) => {
  const { children } = props;
  // const obj = { value: "test" };
  const [open, setOpen] = useState(false);

  return (
    <Context.Provider value={(open, setOpen)}>{children}</Context.Provider>
  );
};
