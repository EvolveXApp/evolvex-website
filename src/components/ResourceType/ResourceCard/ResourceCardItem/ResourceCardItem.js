import React from "react";
import styles from "./ResourceCardItem.module.scss";

export default function ResourceCardItem({ title, link }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.link}>{link}</div>
    </div>
  );
}
