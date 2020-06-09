import React from "react";
import TeamCard from "../../components/TeamCard";
import { withStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/core/styles";
import Layout from "../../components/Layout"

const styles = createStyles({
  teams: {
    maxWidth: "70vw",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    margin: "50px auto",
    fontSize: "2rem",
    borderBottom: "2px solid #3671B7",
    width: 400,
  },
});

const Team = ({ classes, data }) => {
  return (
    <Layout>
      <h2 className={classes.title}>Meet the team</h2>
      <div className={classes.teams}>
        {data && data.map((member, index) => (
          <TeamCard member={member} key={index} />
        ))}
      </div>
    </Layout>
  );
};

export default withStyles(styles)(Team);
