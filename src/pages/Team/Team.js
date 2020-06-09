import React from "react";
import TeamCard from "../../components/TeamCard";
import styles from "./style";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../../components/Layout"

const Team = ({ classes, data }) => {
  return (
    <Layout>
      <h2 className={classes.title}>Meet the team</h2>
      <div className={classes.teams}>
        {data.map((member, index) => (
          <TeamCard member={member} key={index} />
        ))}
      </div>
    </Layout>
  );
};

export default withStyles(styles)(Team);
