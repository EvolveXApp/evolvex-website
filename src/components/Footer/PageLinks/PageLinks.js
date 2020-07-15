import React from "react";
import styles from "./pagelinks.module.scss";
import { Link } from "gatsby";

export default function PageLinks() {
  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <Link to="/" className={styles.mainLink}>
          Home
        </Link>
        <a href="#sign-up-section" className={styles.subLink}>
          Apply
        </a>
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.mainLink}>About</div>
        <Link to="/ProgramOverview" className={styles.subLink}>
          Program
        </Link>
        <Link to="/Team" className={styles.subLink}>
          Team
        </Link>
      </div>
      <div className={styles.infoWrapper}>
        <Link to="/Resources" className={styles.mainLink}>
          Resources
        </Link>
        <Link className={styles.subLink}>Intern</Link>
        <Link className={styles.subLink}>Branding</Link>
        <Link className={styles.subLink}>Proposals</Link>
      </div>
      <div className={styles.infoWrapper}>
        <Link to="/Contact" className={styles.mainLink}>
          Contact
        </Link>
        <Link className={styles.subLink}>Partnerships</Link>
        <a href="https://evolvex.org/" className={styles.subLink}>
          Evolvex
        </a>
      </div>
    </div>
  );
}
