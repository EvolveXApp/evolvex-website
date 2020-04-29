import React from "react";
import styles from "./pagelinks.module.scss";
import { Link } from "react-router-dom";

export default function PageLinks() {
  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <Link className={styles.mainLink}>Home</Link>
        <Link className={styles.subLink}> Apply</Link>
      </div>
      <div className={styles.infoWrapper}>
        <Link className={styles.mainLink}>About </Link>
        <Link className={styles.subLink}> Program</Link>
        <Link className={styles.subLink}>Team</Link>
      </div>
      <div className={styles.infoWrapper}>
        <Link className={styles.mainLink}>Resources </Link>
        <Link className={styles.subLink}> Intern</Link>
        <Link className={styles.subLink}>Branding</Link>
        <Link className={styles.subLink}>Proposals</Link>
      </div>
      <div className={styles.infoWrapper}>
        <Link className={styles.mainLink}>Contact</Link>
        <Link className={styles.subLink}> Partnerships</Link>
        <Link className={styles.subLink}>Evolvex</Link>
      </div>
    </div>
  );
}
