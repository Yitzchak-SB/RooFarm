import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Autocomplete from "./Autocomplete";
import FilterVintageTwoToneIcon from "@material-ui/icons/FilterVintageTwoTone";
import { geocodeGenerator } from "../lib/geocode";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "70vw",
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
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <Autocomplete submit={handleSubmit} />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="submit"
        color="secondary"
      >
        <FilterVintageTwoToneIcon />
      </IconButton>
    </Paper>
  );
};

export default AddressInput;
