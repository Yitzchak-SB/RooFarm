import React, { Fragment } from "react";
import "./App.css";
import HowRoofFarmsWorks from "./components/HowRoofFarmsWorks";
import RoofFarmsBenefits from "./components/RoofFarmsBenefits";
import CssBaseline from "@material-ui/core/CssBaseline";
import AddressInput from "./components/AddressInput";
import { Fab } from "@material-ui/core";
import FilterVintageTwoToneIcon from "@material-ui/icons/FilterVintageTwoTone";
import Scroll from "react-scroll";

const ScrollLink = Scroll.ScrollLink;

const App = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("submitted");
  };
  return (
    <Fragment>
      <CssBaseline />
      <AddressInput />
      <HowRoofFarmsWorks />
      <RoofFarmsBenefits />
      <Fab
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
        }}
        color="secondary"
        aria-label="get-started"
        onClick={handleClick}
      >
        <FilterVintageTwoToneIcon />
      </Fab>
    </Fragment>
  );
};

export default App;
