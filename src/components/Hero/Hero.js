import React from "react";
import styles from "../Hero/Hero.module.scss";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <div className={styles.hero_container}>
      <HeroContent />
    </div>
  );
}
