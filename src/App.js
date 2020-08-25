import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import GetStartedButton from "./components/GetStartedButton";
import AddressInput from "./components/AddressInput";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <GetStartedButton />
      <AddressInput />
    </Fragment>
  );
}

export default App;
