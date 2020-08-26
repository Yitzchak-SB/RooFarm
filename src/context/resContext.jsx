import React, { createContext, useState } from "react";

export const resContext = createContext();

const ResContextProvider = (props) => {
  const [res, setRes] = useState(0);

  return (
    <resContext.Provider
      value={{
        res,
        setRes,
      }}
    >
      {props.children}
    </resContext.Provider>
  );
};

export default ResContextProvider;
