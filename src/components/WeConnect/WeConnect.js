import React from "react";
import { CardItem } from "./Card/CardItem";
import { Cards } from "./Card/Cards";
import styles from "./WeConnect.module.scss";

export default function WeConnect() {
  const info = Cards.map((Card) => (
    <CardItem image={Card.image} title={Card.title} content={Card.content} />
  ));

  return (
    <div>
      <p className={styles.heading}>We Connect</p>

      <div className={styles.cardItemContainer}>{info}</div>
    </div>
  );
}
