import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
const Team = ({ classes, data }) => {
  console.log("Data", data);
  return (
    <>
      <h2>Meet the team</h2>
      <div></div>
    </>
  );
};

export default withStyles(styles)(Team);
