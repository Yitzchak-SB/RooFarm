import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import { geocodeGenerator } from "../lib/geocode";
import FilterVintageTwoToneIcon from "@material-ui/icons/FilterVintageTwoTone";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../css files/AddressInput.css";
import Autocomplete from "./Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    width: "35vw",
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const AddressInput = () => {
  const classes = useStyles();

  const handleSubmit = async (address) => {
    console.log(address);
    geocodeGenerator(address);
  };

  return (
    <div id="div-wrapper">
      <div id="div-subwrapper">
        <h1 id="address-title">roofarm</h1>
        <p id="address-subtitle">GROW YOUR OWN FOOD</p>
        <div id="paper-wrapper">
          <Paper
            component="form"
            className={classes.root}
            id="paper-responsive"
            onSubmit={handleSubmit}
          >
            <Autocomplete submit={handleSubmit} />

            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="submit"
              color="secondary"
            >
              <Link to="/submit">
                <FilterVintageTwoToneIcon />
              </Link>
            </IconButton>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default AddressInput;
