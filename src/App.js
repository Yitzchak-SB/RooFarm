import React, { Fragment } from "react";
import "./App.css";
import HowRoofFarmsWorks from "./components/HowRoofFarmsWorks";
import RoofFarmsBenefits from "./components/RoofFarmsBenefits";
import CssBaseline from "@material-ui/core/CssBaseline";
import GetStartedButton from "./components/GetStartedButton";
import AddressInput from "./components/AddressInput";

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <GetStartedButton />
      <AddressInput />
      <HowRoofFarmsWorks />
      <RoofFarmsBenefits />
    </Fragment>
  );
};

export default App;
