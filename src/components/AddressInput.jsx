import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Autocomp from "../components/Autocomp";
import IconButton from "@material-ui/core/IconButton";
import { geocodeGenerator } from "../lib/geocode";
import FilterVintageTwoToneIcon from "@material-ui/icons/FilterVintageTwoTone";
import { Link } from "react-router-dom";
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
  const [value, setValue] = useState(null);

  const context = useContext(resContext);

  const handleSubmit = async () => {
    context.setSentRes(true);
    try {
      const sqMtr = await geocodeGenerator(value);
      context.setRes(sqMtr);
    } catch (err) {
      context.setErr(err);
    }
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
            <Autocomp value={value} setValue={setValue} />

            <IconButton
              onClick={handleSubmit}
              type="submit"
              className={classes.iconButton}
              aria-label="submit"
              disabled={!value}
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
