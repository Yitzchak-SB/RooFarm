import React from "react";
import { Fab } from "@material-ui/core";
import FilterVintageTwoToneIcon from "@material-ui/icons/FilterVintageTwoTone";

const GetStartedButton = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <Fab color="secondary" aria-label="get-started" onClick={handleClick}>
      <FilterVintageTwoToneIcon />
    </Fab>
  );
};
export default GetStartedButton;
