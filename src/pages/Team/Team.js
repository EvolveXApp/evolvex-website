import React from "react";
import TeamCard from "../../components/TeamCard";
import Layout from "../../components/Layout";
import styles from "./styles.module.scss";

const Team = ({ data }) => {
  return (
    <Layout>
      <h2 className={styles.title}>Meet the team</h2>
      <div className={styles.teams}>
        {data &&
          data.map((member, index) => <TeamCard member={member} key={index} />)}
      </div>
    </Layout>
  );
};

export default Team;
