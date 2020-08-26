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
  };

  return (
    <div id="response-wrapper">
      {res > 0 ? (
        <h1 id="response-1-h1">
          Your roof has {res} sq. meters of prime garden real estate!
        </h1>
      ) : (
        <h1 id="response-2-h1">
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
      {res > 0 && (
        <h4>Your roof can feed {Math.floor(res / 33)} people per year!</h4>
      )}
    </div>
  );
}

export default Response;
