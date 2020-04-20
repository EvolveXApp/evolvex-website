import React from "react";
import { NavLink } from "./NavLink";
import styles from "./NavLink.module.scss";

export function ActiveNavLink({ to, title }) {
  return (
    <NavLink
      className={`${styles.navLink} ${styles.activeNavLink}`}
      to={to}
      title={title}
      activeStyle={{ borderColor: "#EEB91F" }}
    />
  );
}
