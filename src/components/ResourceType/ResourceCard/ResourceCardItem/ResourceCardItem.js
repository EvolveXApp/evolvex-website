import React from "react";
import styles from "./ResourceCardItem.module.scss";
import downloadIcon from "../../../../assets/icons/download-icon.png";

export default function ResourceCardItem({ title, link }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.link}>{link}</div>
      <img src={downloadIcon} className={styles.icon} alt="download icon" />
    </div>
  );
}
