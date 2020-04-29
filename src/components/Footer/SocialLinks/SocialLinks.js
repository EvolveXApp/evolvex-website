import React from "react";
import styles from "./styles.module.scss";
import Google from "../../../assets/icons/Google.png";
import IG from "../../../assets/icons/IG.png";
import Dribbble from "../../../assets/icons/Dribbble.png";
import Facebook from "../../../assets/icons/facebook.png";
import Vimeo from "../../../assets/icons/Vimeo.png";

export default function SocialLinks() {
  return (
    <div className={styles.socialLinksContainer}>
      <a
        className={styles.link}
        href="https://www.instagram.com/evolvebrandingvancouver/"
      >
        <img src={Facebook} className={styles.icon} alt="Facebook" />
      </a>
      <a
        className={styles.link}
        href="https://www.instagram.com/evolvebrandingvancouver/"
      >
        <img src={IG} className={styles.icon} alt="Instagram" />
      </a>
      <a
        className={styles.link}
        href="https://www.instagram.com/evolvebrandingvancouver/"
      >
        <img src={Google} className={styles.icon} alt="Google" />
      </a>
      <a
        className={styles.link}
        href="https://www.instagram.com/evolvebrandingvancouver/"
      >
        <img src={Dribbble} className={styles.icon} alt="Dribbble" />
      </a>
      <a
        className={styles.link}
        href="https://www.instagram.com/evolvebrandingvancouver/"
      >
        <img src={Vimeo} className={styles.icon} alt="Vimeo" />
      </a>
    </div>
  );
}
