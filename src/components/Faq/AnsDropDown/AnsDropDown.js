import React from "react";
import styles from "./AnsDropDown.module.scss";

export default function AnswerCard({ ans }) {
  return (
    <div className={styles.container}>
      <div className={styles.ansCard}>
        <div className={styles.ans}>{ans}</div>
      </div>
    </div>
  );
}
