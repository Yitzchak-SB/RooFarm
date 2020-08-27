import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import "../css files/Response.css";
import { resContext } from "../context/resContext";
import { CircularProgress } from "@material-ui/core";

function Response() {
  let res = null;
  let err = null;
  let history = useHistory();
  const context = useContext(resContext);
  if (context) {
    res = context.res;
    err = context.err;
    if (!context.sentRes) history.push("/");
  }

  return (
    <div id="response-wrapper">
      {err ? (
        <h1>Oops! Looks like we couldn't process your address</h1>
      ) : res > 0 ? (
        <h1 id="response-1-h1">
          Your roof has {res} sq. meters of prime garden real estate!
        </h1>
      ) : (
        <>
          <h1 id="response-2-h1">
            Thank you for caring! We will be in touch shortly!
          </h1>
          <CircularProgress />
        </>
      )}
      {err ? (
        <h3>Check that your roof is in our service area, and try again!</h3>
      ) : res > 0 ? (
        <h3 id="response-1-h3">
          Your roof can feed {Math.floor(res / 33)} people per year!
        </h3>
      ) : (
        <h3 id="response-2-h3">
          Your request has been successfully submitted and we will get in touch
          with you in next 24-hours
        </h3>
      )}
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
    </div>
  );
}

export default Response;
