import React, { useState } from "react";
import styles from "./Faq.module.scss";
import { FaqData } from "./FaqCard/FaqData";
import { FaqCard } from "./FaqCard/FaqCard";
import AnswerCard from "./AnswerCard";
import Logo from "./Logo";

export default function Faq() {
  const [current, setCurrent] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>FAQ's</div>
      <Logo />
      <div className={styles.containerForQnAns}>
        <div className={styles.wrapper}>
          {FaqData.map((data, index) => (
            <FaqCard qn={data.question} onClick={() => setCurrent(index)} />
          ))}
        </div>
        <div>
          <AnswerCard ans={FaqData[current].answer} />
        </div>
      </div>
    </div>
  );
}
