import React from "react";
import styles from "./ResourceCard.module.scss";
import ResourceCardItem from "./ResourceCardItem/ResourceCardItem";

export function ResourceCard({ name, items }) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.items}>
        {items.map((item) => (
          <ResourceCardItem title={item.title} link={item.link} />
        ))}
      </div>
    </div>
  );
}
