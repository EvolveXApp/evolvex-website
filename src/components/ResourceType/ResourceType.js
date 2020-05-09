import React from "react";
import { ResourceData } from "./ResourceCard/ResourceData";
import { ResourceCard } from "./ResourceCard/ResourceCard";
import styles from "./ResourceType.module.scss";

export default function ResourceType() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerResourceType}>
        {ResourceData.map((list) => (
          <ResourceCard name={list.name} items={list.items} />
        ))}
      </div>
    </div>
  );
}
