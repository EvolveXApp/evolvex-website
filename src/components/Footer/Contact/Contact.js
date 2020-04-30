import React from "react";
import styles from "./contact.module.scss";
import MapPin from "../../../assets/icons/map-pin.png";
import Phone from "../../../assets/icons/phone.png";
import Mail from "../../../assets/icons/mail.svg";

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <img src={MapPin} className={styles.icon} alt="icon" />{" "}
        <p> 317 - 1090 Homer St Vancouver, BC Canada</p>
      </div>
      <div className={styles.infoWrapper}>
        <img src={Phone} className={styles.icon} alt="icon" />{" "}
        <p> 1 (604) 396 4166</p>
      </div>
      <div className={styles.infoWrapper}>
        <img src={Mail} className={styles.icon} alt="icon" />{" "}
        <p> hello@evolvebranding.ca</p>
      </div>
    </div>
  );
}
