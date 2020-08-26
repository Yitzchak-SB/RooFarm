import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "../css files/Response.css";
import { resContext } from "../context/resContext";

function Response() {
  const [checkedA, setChecked] = useState(true);
  let res = null;
  const context = useContext(resContext);
  if (context) res = context.res;

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(res);
  };

  return (
    <div id="response-wrapper">
      {res > 0 ? (
        <h1 id="response-h1">
          Your roof has {res} sq. meters of prime garden real estate!
        </h1>
      ) : (
        <h1 id="response-h1">
          Thank you for contacting us! We will be in touch shortly!
        </h1>
      )}
      <h3 id="response-h3">
        Your request has been successfully submitted and we will get in touch
        with you in next 24-hours
      </h3>
      <Button variant="contained" color="primary" id="response-btn">
        <Link to="/" id="response-link">
          Back to Home Page
        </Link>
      </Button>
      <p id="response-question">
        Do you want to receive the information via email?
      </p>
      <br />
      <form>
        <TextField
          id="response-textfield"
          label="abc@abc.com"
          variant="outlined"
          type="email"
        />
        <Button variant="contained" color="primary" id="response-form-btn">
          SUBMIT
        </Button>
      </form>
      <h4>Which vegetables would you like for your roofarm?</h4>
      <FormGroup row id="checkbox">
        <FormControlLabel
          control={
            <Checkbox color="primary" onChange={handleChange} name="checkedA" />
          }
          label="Basil"
        />
        <FormControlLabel
          control={
            <Checkbox color="primary" onChange={handleChange} name="checkedA" />
          }
          label="Broccoli"
        />
        <FormControlLabel
          control={
            <Checkbox color="primary" onChange={handleChange} name="checkedA" />
          }
          label="Carrots"
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox color="primary" onChange={handleChange} name="checkedA" />
          }
          label="Cauliflower"
        />
        <FormControlLabel
          control={
            <Checkbox color="primary" onChange={handleChange} name="checkedA" />
          }
          label="Cilantro"
        />
        <FormControlLabel
          control={
            <Checkbox color="primary" onChange={handleChange} name="checkedA" />
          }
          label="Cucumbers"
        />{" "}
        <br />
        <FormControlLabel
          control={
            <Checkbox color="primary" onChange={handleChange} name="checkedA" />
          }
          label="Garlic"
        />
        <FormControlLabel
          control={
            <Checkbox color="primary" onChange={handleChange} name="checkedA" />
          }
          label="Kale"
        />
        <FormControlLabel
          control={
            <Checkbox color="primary" onChange={handleChange} name="checkedA" />
          }
          label="Lettuce"
        />{" "}
        <br />
        <FormControlLabel
          control={
            <Checkbox color="primary" onChange={handleChange} name="checkedA" />
          }
          label="Onions"
        />
        <FormControlLabel
          control={
            <Checkbox color="primary" onChange={handleChange} name="checkedA" />
          }
          label="Peppers"
        />
        <FormControlLabel
          control={
            <Checkbox color="primary" onChange={handleChange} name="checkedA" />
          }
          label="Spinach"
        />{" "}
        <br />
        <FormControlLabel
          control={
            <Checkbox color="primary" onChange={handleChange} name="checkedA" />
          }
          label="Tomatoes"
        />
        <FormControlLabel
          control={
            <Checkbox color="primary" onChange={handleChange} name="checkedA" />
          }
          label="Cherry Tomatoes"
        />
      </FormGroup>
    </div>
  );
}

export default Response;
