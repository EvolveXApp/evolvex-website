import React from "react";
import plusIcon from "../../../assets/icons/plus.png";
import styles from "./FaqCard.module.scss";
export function FaqCard({ qn, onClick }) {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          <img src={plusIcon} className={styles.icon} onClick={onClick} />
          <div className={styles.qns}>{qn}</div>
        </div>
      </div>
    </div>
  );
}
