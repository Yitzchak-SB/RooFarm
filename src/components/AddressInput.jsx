import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Autocomp from "../components/Autocomp";
import IconButton from "@material-ui/core/IconButton";
import { geocodeGenerator } from "../lib/geocode";
import FilterVintageTwoToneIcon from "@material-ui/icons/FilterVintageTwoTone";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../css files/AddressInput.css";
import { resContext } from "../context/resContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4px 4px",
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
  place: { marginTop: "6px" },
}));

const AddressInput = () => {
  const classes = useStyles();

  // let setRes = null;
  const context = useContext(resContext);
  // setRes = context && context.setRes;

  const handleSubmit = async (address) => {
    const sqMtr = await geocodeGenerator(address);
    console.log(sqMtr);
    context.setRes(sqMtr);
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
            <Autocomp submit={handleSubmit} />

            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="submit"
            >
              <Link to="/submit">
                <FilterVintageTwoToneIcon
                  className={classes.place}
                  color="secondary"
                />
              </Link>
            </IconButton>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default AddressInput;
