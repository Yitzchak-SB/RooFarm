<<<<<<< HEAD
import React, { Fragment } from 'react';
import './App.css';
import HowRoofFarmsWorks from './components/HowRoofFarmsWorks'
import RoofFarmsBenefits from './components/RoofFarmsBenefits'
import logo from "./logo.svg";


function App() {
  return (
    <Fragment>
    <div className="App">
      <HowRoofFarmsWorks />
      <RoofFarmsBenefits />
    </div>
    </Fragment>

  );
=======
import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import GetStartedButton from "./components/GetStartedButton";
import AddressInput from "./components/AddressInput";

function App() {
<<<<<<< HEAD
  return <Fragment></Fragment>;
>>>>>>> 8395d474d9aed79b7b3ffbf2a2e20e92ccd212e2
=======
  return (
    <Fragment>
      <CssBaseline />
      <GetStartedButton />
      <AddressInput />
    </Fragment>
  );
>>>>>>> 811786b3fc0d7b452d4793a729179b25fdb23be8
}

export default App;
