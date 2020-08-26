import React, { Fragment } from "react";
import "./App.css";
import HowRoofFarmsWorks from "./components/HowRoofFarmsWorks";
import RoofFarmsBenefits from "./components/RoofFarmsBenefits";
import CssBaseline from "@material-ui/core/CssBaseline";
import AddressInput from "./components/AddressInput";
import { Fab } from "@material-ui/core";
import FilterVintageTwoToneIcon from "@material-ui/icons/FilterVintageTwoTone";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Response from "./components/Response";
import Map from "./components/Map";

const App = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("submitted");
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Fragment>
            <CssBaseline />
            <AddressInput />
            <RoofFarmsBenefits />
            <HowRoofFarmsWorks />
            <Map />
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
        </Route>
        <Route path="/submit/">
          <Response />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
