import React from "react";
import styles from "./HeroContent.module.scss";
import Button from "../Button";

export default function HeroContent() {
  return (
    <div className={styles.container_HeroContent}>
      <h1>
        Expedite your career as a digital creative
        <span className={styles.period}>.</span>
      </h1>
      <p>
        Evolve X is the bridge between interns, startups, philantropies and
        foundations. We give early professionals the experience and worth while
        ventures to grow their career.
      </p>
      <Button />
    </div>
  );
}
