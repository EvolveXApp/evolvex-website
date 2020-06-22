import React from "react";
import plusIcon from "../../../assets/icons/plus.png";
import styles from "./FaqCard.module.scss";
// import AnswerCard from "../AnswerCard/AnswerCard";
import AnsDropDown from "../AnsDropDown/AnsDropDown";

export function FaqCard({ qn, isCurrent, ans, onClick }) {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          <img src={plusIcon} className={styles.icon} onClick={onClick} />
          <div className={styles.qns}>{qn}</div>
        </div>
        {isCurrent && (
          <div className={styles.m_t_ans}>
            <AnsDropDown ans={ans} />
          </div>
        )}
      </div>
    </div>
  );
}
