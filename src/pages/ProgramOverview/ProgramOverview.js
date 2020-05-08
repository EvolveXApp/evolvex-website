import React, { Component } from "react";
import Faq from "../../components/Faq";
import styles from "./ProgramOverview.module.scss";

class ProgramOverview extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Faq />
      </div>
    );
  }
}

export default ProgramOverview;
