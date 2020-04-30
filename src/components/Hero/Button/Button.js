import React from "react";
import styles from "./Button.module.scss";

export default function Button() {
  return (
    <div className={styles.btnContainer}>
      <p className={styles.btnContent}> Apply Now</p>
    </div>
  );
}
