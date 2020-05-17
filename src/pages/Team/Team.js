import React from "react";
import TeamCard from "../../components/TeamCard";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
const Team = ({ classes, data }) => {
  return (
    <>
      <h2 className={classes.title}>Meet the team</h2>
      <div className={classes.teams}>
        {data.map((member, index) => (
          <TeamCard member={member} key={index} />
        ))}
      </div>
    </>
  );
};

export default withStyles(styles)(Team);
