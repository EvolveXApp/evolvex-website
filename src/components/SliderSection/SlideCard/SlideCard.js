import React from "react";
import styles from "./SlideCard.module.scss";

export function SlideCard({ image, name, content }) {
  return (
    <div className={styles.slideCardContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.sliderImg} src={image} alt="icon" />
      </div>
      <h3 className={styles.heading}>{name}</h3>
      <p className={styles.sliderText}>{content}</p>
    </div>
  );
}
