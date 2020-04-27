import React from "react";
import logo from "../../../assets/images/logo.png";
import styles from "./logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={logo} alt="footer-logo" />
    </div>
  );
}
