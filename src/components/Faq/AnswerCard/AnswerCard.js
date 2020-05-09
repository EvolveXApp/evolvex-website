import React from "react";
import styles from "./AnswerCard.module.scss";
import logo from "../../../assets/images/logo.png";
export default function AnswerCard({ ans }) {
  return (
    <div className={styles.container}>
      <div className={styles.ansCard}>
        <img src={logo} className={styles.logo} />
        <div className={styles.ans}>{ans}</div>
      </div>
    </div>
  );
}
