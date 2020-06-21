import React from "react";
import logo from "../../../assets/images/logo.png";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />
      <p className={styles.text}>
        Click on the FAQ plus icon if you would like more information about the
        program. Evolveˣ prides itself on communication and transparency
      </p>
    </div>
  );
}
