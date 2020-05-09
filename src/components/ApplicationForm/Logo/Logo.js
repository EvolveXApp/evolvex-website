import React from "react";
import logo from "../../../assets/images/logo.png";
import styles from "./logo.module.scss";

export default function Logo() {
    return <div className={styles.imgContainer}><img className={styles.logo} src={logo} alt="logo" /></div>;
  }