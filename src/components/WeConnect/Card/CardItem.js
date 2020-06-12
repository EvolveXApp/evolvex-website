import React from "react";
import styles from "./CardItem.module.scss";

export function CardItem({ image, name, content }) {
  return (
    <div className={styles.cardItemContainer}>
      <div className={styles.imageContainer}>
        <img alt="icon" className={styles.image} src={image} />
      </div>
      <h2>{name}</h2>
      <p>{content} </p>
    </div>
  );
}
