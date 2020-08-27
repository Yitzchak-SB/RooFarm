import React, { createContext, useState } from "react";

export const resContext = createContext();

const ResContextProvider = (props) => {
  const [res, setRes] = useState(0);
  const [err, setErr] = useState(false);
  const [sentRes, setSentRes] = useState(false);

  return (
    <resContext.Provider
      value={{
        res,
        setRes,
        err,
        setErr,
        sentRes,
        setSentRes,
      }}
    >
      {props.children}
    </resContext.Provider>
  );
};

export default ResContextProvider;
