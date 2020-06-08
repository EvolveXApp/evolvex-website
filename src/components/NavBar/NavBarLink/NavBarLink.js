import React from "react";
import { Link } from "gatsby";
import styles from "./NavBarLink.module.scss";

export function NavBarLink({ to, title, ...props }) {
  return (
    <Link className={styles.navLink} to={to} {...props}>
      {title}
    </Link>
  );
}
