import React, { useState, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const Autocomp = ({ submit }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    (() => {
      submit(value);
      console.log("value");
    })();
  }, [value, submit]);

  return (
    <div style={{ width: "100%" }}>
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_API_KEY}
        selectProps={{
          value,
          onChange: setValue,
          autoFocus: true,
          placeholder: "Enter Your Address To Get Started",
          styles: {
            input: (provided) => ({
              ...provided,
              color: "blue",
            }),
            option: (provided) => ({
              ...provided,
              color: "blue",
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "blue",
            }),
          },
        }}
      />
    </div>
  );
};

export default Autocomp;
